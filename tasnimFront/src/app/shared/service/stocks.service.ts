import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Stock} from '../model/stocks.types';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {HttpClient} from '@angular/common/http';
import {ReclamationsService} from './reclamations.service';

@Injectable({
    providedIn: 'root'
})
export class StocksService {
    stock: any;
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    private _stocks: BehaviorSubject<Stock[] | null> = new BehaviorSubject(null);
    private _stock: BehaviorSubject<Stock | null> = new BehaviorSubject(null);

    constructor(private _apiService: ApiService,
                private _httpClient: HttpClient) {
    }

    /**
     * Getter for products
     */
    get stocks$(): Observable<Stock[]> {
        return this._stocks.asObservable();
    }

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<InventoryPagination> {
        return this._pagination.asObservable();
    }

    addStock(body): Observable<any> {
        console.log(body);
        return this._apiService.post(`${ApiService.apiStock}/`, body).pipe(map(res => res));

    }

    editStock(body): Observable<Stock> {
        return this._apiService.patch(`${ApiService.apiStock}/`, body).pipe(map(res => res));
    }

    /**
     * Get stock by id
     */
    getStockById(id: number): Observable<Stock> {
        return this._stocks.pipe(
            take(1),
            map((stocks) => {

                // Find the product
                const stock = stocks.find(item => item.id === id) || null;

                // Update the product
                this._stock.next(stock);

                // Return the product
                return stock;
            }),
            switchMap((stock) => {

                if (!stock) {
                    return throwError('Could not found product with id of ' + id + '!');
                }

                return of(stock);
            })
        );
    }


    /**
     * Get products
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    getAllStocks(page: number = 0, size: number = 10, sort: string = 'quantity', order: 'asc' | 'desc' | '' = 'desc', search: string = ''):
        Observable<{ pageable: InventoryPagination; content: Stock[] }> {
        return this._httpClient.get<{ pageable: InventoryPagination; content: Stock[] }>
        (`${ApiService.apiVersion}${ApiService.apiStock}/get-all-stocks`, {
            params: {
                page: '' + page,
                size: '' + size,
                sort,
                order,
                search
            }
        }).pipe(
            tap((response) => {
                this._pagination.next(response.pageable);
                this._stocks.next(response.content);
            })
        );
    }

    /**
     * Delete the stock
     *
     * @param stock
     */
    deleteStock(stock: Stock): Observable<boolean> {
        return this.stocks$.pipe(
            take(1),
            switchMap(stocks =>
                this._httpClient.delete(`${ApiService.apiVersion}${ApiService.apiStock}/delete-stock/${stock.id}`).pipe(
                    map(() => {
                        // Find the index of the deleted product
                        const index = stocks.findIndex(item => item.id === stock.id);
                        // Delete the product
                        stocks.splice(index, 1);
                        // Update the stocks
                        this._stocks.next(stocks);
                        // Return the deleted status
                        return true;
                    })
                ))
        );
    }
}
