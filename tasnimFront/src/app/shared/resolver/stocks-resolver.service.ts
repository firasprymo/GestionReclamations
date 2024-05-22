import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {StocksService} from '../service/stocks.service';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {Steps} from '../model/steps.types';
import {Stock} from '../model/stocks.types';

@Injectable({
    providedIn: 'root'
})
export class StocksResolver implements Resolve<any> {
    constructor(private stocksService: StocksService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pageable: InventoryPagination; content: Stock[] }> {
        return this.stocksService.getAllStocks();

    }
}
