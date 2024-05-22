import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {ReclamationsService} from '../service/reclamations.service';
import {Reclamations} from '../model/reclamations.types';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ReclamationsResolvers implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(private _reclamationsService: ReclamationsService) {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pageable: InventoryPagination; content: Reclamations[] }> {
        return this._reclamationsService.getAllReclamations();
    }
}


@Injectable({
    providedIn: 'root'
})
export class FileManagerFolderResolver implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _reclamationsService: ReclamationsService
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reclamations> {
        return this._reclamationsService.getReclamationById(route.paramMap.get('idReclamation'))
            .pipe(
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

@Injectable({
    providedIn: 'root'
})
export class ReclamationManagerItemResolver implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _reclamationsService: ReclamationsService
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reclamations> {
        return this._reclamationsService.getReclamationById(route.paramMap.get('id'))
            .pipe(
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
@Injectable({
    providedIn: 'root'
})
export class ReclamationByIdResolver implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _reclamationService: ReclamationsService
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reclamations> {
        return this._reclamationService.getReclamationById(route.paramMap.get('id'))
            .pipe(
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
