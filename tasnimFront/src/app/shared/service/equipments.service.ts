import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Equipments} from '../model/equipments.types';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EquipmentsService {
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    private _equipments: BehaviorSubject<Equipments[] | null> = new BehaviorSubject(null);
    private _equipment: BehaviorSubject<Equipments | null> = new BehaviorSubject(null);

    constructor(private _apiService: ApiService,
                private _httpClient: HttpClient) {
    }

    /**
     * Getter for products
     */
    get equipments$(): Observable<Equipments[]> {
        return this._equipments.asObservable();
    }

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<InventoryPagination> {
        return this._pagination.asObservable();
    }

    addEquipment(body): Observable<any> {
        console.log(body);
        return this._apiService.post(`${ApiService.apiEquipment}`, body)
            .pipe(map(res => res));

    }

    editEquipment(body, id): Observable<Equipments> {
        return this._apiService.patch(`${ApiService.apiEquipment}/${id}`, body).pipe(map(res => res));
    }

    /**
     * Get equipment by id
     */
    getEquipmentById(id: number): Observable<Equipments> {
        return this._equipments.pipe(
            take(1),
            map((equipments) => {

                // Find the product
                const equipment = equipments.find(item => item.id === id) || null;

                // Update the product
                this._equipment.next(equipment);

                // Return the product
                return equipment;
            }),
            switchMap((equipment) => {

                if (!equipment) {
                    return throwError('Could not found product with id of ' + id + '!');
                }

                return of(equipment);
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
    getAllEquipments(page: number = 0, size: number = 10, sort: string = 'description', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
        Observable<{ pageable: InventoryPagination; content: Equipments[] }> {
        return this._httpClient.get<{ pageable: InventoryPagination; content: Equipments[] }>
        (`${ApiService.apiVersion}${ApiService.apiEquipment}/get-all-equipments`, {
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
                this._equipments.next(response.content);
            })
        );
    }

    /**
     * Delete the equipment
     *
     * @param equipment
     */
    deleteEquipment(equipment: Equipments): Observable<boolean> {
        return this.equipments$.pipe(
            take(1),
            switchMap(equipments =>
                this._httpClient.delete(`${ApiService.apiVersion}${ApiService.apiEquipment}/${equipment.id}`).pipe(
                    map(() => {
                        // Find the index of the deleted product
                        const index = equipments.findIndex(item => item.id === equipment.id);
                        // Delete the product
                        equipments.splice(index, 1);
                        // Update the equipments
                        this._equipments.next(equipments);
                        // Return the deleted status
                        return true;
                    })
                ))
        );
    }
}
