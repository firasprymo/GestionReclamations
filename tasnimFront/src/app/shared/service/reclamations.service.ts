import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Reclamations} from '../model/reclamations.types';

@Injectable({
    providedIn: 'root'
})
export class ReclamationsService {
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    private _reclamations: BehaviorSubject<Reclamations[] | null> = new BehaviorSubject(null);
    private _reclamation: BehaviorSubject<Reclamations | null> = new BehaviorSubject(null);

    constructor(private _apiService: ApiService,
                private _httpClient: HttpClient) {
    }

    /**
     * Getter for reclamations
     */
    get reclamations$(): Observable<Reclamations[]> {
        return this._reclamations.asObservable();
    }

    /**
     * Getter for item
     */
    get reclamation$(): Observable<Reclamations> {
        return this._reclamation.asObservable();
    }

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<InventoryPagination> {
        return this._pagination.asObservable();
    }

    /**
     * Create product
     */
    addReclamation(reclamation): Observable<Reclamations> {
        return this.reclamations$.pipe(
            take(1),
            switchMap(reclamations => this._httpClient.post<Reclamations>(`${ApiService.apiVersion}${ApiService.apiReclamations}/add-reclamation`, reclamation).pipe(
                map((newReclamation) => {

                    // Update the reclamations with the new product
                    this._reclamations.next([newReclamation]);

                    // Return the new product
                    return newReclamation;
                })
            ))
        );
    }

    editReclamation(body, id): Observable<Reclamations> {
        return this._apiService.patch(`${ApiService.apiVersion}${ApiService.apiReclamations}/${id}`, body).pipe(map(res => res));
    }

    /**
     * Get reclamation by id
     */
    getReclamationById(id: string): Observable<Reclamations> {
        return this._httpClient.get<Reclamations>(`${ApiService.apiVersion}${ApiService.apiReclamations}/find-reclamation/${id}`).pipe(
            map((reclamation) => {
                // Update the reclamation
                this._reclamation.next(reclamation);

                // Return the reclamation
                return reclamation;
            }),
            switchMap((reclamation) => {

                if (!reclamation) {
                    return throwError('Could not found reclamation with id of ' + id + '!');
                }

                return of(reclamation);
            })
        );
    }

    /**
     * Get reclamations
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    getAllReclamations(page: number = 0, size: number = 5, sort: string = 'content', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
        Observable<{ pageable: InventoryPagination; content: Reclamations[] }> {
        return this._httpClient.get<{ pageable: InventoryPagination; content: Reclamations[] }>
        (`${ApiService.apiVersion}${ApiService.apiReclamations}/get-all-reclamations`, {
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
                this._reclamations.next(response.content);
            })
        );
    }

    /**
     * Delete the reclamation
     *
     * @param reclamation
     */
    deleteReclamation(reclamation: Reclamations): Observable<boolean> {
        return this.reclamations$.pipe(
            take(1),
            switchMap(reclamations =>
                this._httpClient.delete(`${ApiService.apiVersion}${ApiService.apiReclamations}/delete-reclamation/${reclamation.id}`).pipe(
                    map(() => {
                        // Find the index of the deleted product
                        const index = reclamations.findIndex(item => item.id === reclamation.id);
                        // Delete the product
                        reclamations.splice(index, 1);
                        // Update the reclamations
                        this._reclamations.next(reclamations);
                        // Return the deleted status
                        return true;
                    })
                ))
        );
    }

    getReclamations(): Observable<Reclamations[]> {
        return this._httpClient.get<Reclamations[]>(`${ApiService.apiVersion}${ApiService.apiReclamations}`).pipe(
            tap((response: any) => {
                this._reclamations.next(response);
            })
        );
    }

}
