import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve,  RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import {EquipmentsService} from '../service/equipments.service';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {Equipments} from '../model/equipments.types';
@Injectable({
    providedIn: 'root'
})
export class EquipmentsResolvers implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _equipmentService: EquipmentsService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pageable: InventoryPagination; content: Equipments[] }>
    {
        return this._equipmentService.getAllEquipments();
    }
}

