import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {ContactsService} from '../service/contacts.service';
import {Contacts} from '../model/contacts.types';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ContactsResolvers implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(private _contactsService: ContactsService) {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{
        pageable: InventoryPagination;
        content: Contacts[];
    }> {
        return this._contactsService.getAllContacts();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContactByIdResolvers implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(private _contactsService: ContactsService,
                private _router: Router
    ) {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contacts> {
        console.log(route.paramMap.get('idContact'));
        if (!route.paramMap.get('idContact')) {
            return;
        }
        return this._contactsService.getContactById(route.paramMap.get('idContact')).pipe(
            // Error here means the requested task is not available
            catchError((error) => {

                // Log the error
                console.error(error);

                // Get the parent url
                const parentUrl = state.url.split('/').slice(0, -1).join('/');

                // Navigate to there
                this._router.navigateByUrl(parentUrl);

                // Throw an error
                return throwError(error);
            })
        );
    }
}


