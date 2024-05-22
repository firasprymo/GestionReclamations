import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {InventoryPagination} from '../../modules/admin/apps/ecommerce/inventory/inventory.types';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Contacts} from '../model/contacts.types';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    private _contacts: BehaviorSubject<Contacts[] | null> = new BehaviorSubject(null);
    private _contact: BehaviorSubject<Contacts | null> = new BehaviorSubject(null);

    constructor(private _apiService: ApiService,
                private _httpClient: HttpClient) {
    }

    /**
     * Getter for contacts
     */
    get contacts$(): Observable<Contacts[]> {
        return this._contacts.asObservable();
    }

    /**
     * Getter for item
     */
    get contact$(): Observable<Contacts> {
        return this._contact.asObservable();
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
    addContact(contacts: any): Observable<any> {
        console.log(contacts)
        return this._httpClient.post(`${ApiService.apiVersion}${ApiService.apiContact}/`, contacts).pipe(map(res => res));

    }

    editContact(body: any): Observable<Contacts> {
        console.log(body)

        return this._httpClient.patch(`${ApiService.apiVersion}${ApiService.apiContact}/`, body).pipe(map(res => res));
    }

    /**
     * Get contact by id
     */
    getContactById(id: any): Observable<Contacts> {
        return this._contacts.pipe(
            take(1),
            map((contacts) => {
                console.log(contacts);
                // Find the product
                const contact = contacts.find((item) => {
                    id = id * 1;
                    return item.id === id;
                }) || null;
                // Update the product
                this._contact.next(contact);

                // Return the product
                return contact;
            }),
            switchMap((contact) => {

                if (!contact) {
                    return throwError('Could not found product with id of ' + id + '!');
                }

                return of(contact);
            })
        );
    }

    /**
     * Get contacts
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    getAllContacts(page: number = 0, size: number = 5, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
        Observable<{ pageable: InventoryPagination; content: Contacts[] }> {
        return this._httpClient.get<{ pageable: InventoryPagination; content: Contacts[] }>
        (`${ApiService.apiVersion}${ApiService.apiContact}/get-all-contacts`, {
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
                this._contacts.next(response.content);
            })
        );
    }

    /**
     * Delete the contact
     *
     * @param contact
     */
    deleteContact(contact: Contacts): Observable<boolean> {
        return this.contacts$.pipe(
            take(1),
            switchMap(contacts =>
                this._httpClient.delete(`${ApiService.apiVersion}${ApiService.apiContact}/${contact.id}`).pipe(
                    map(() => {
                        // Find the index of the deleted product
                        const index = contacts.findIndex(item => item.id === contact.id);
                        // Delete the product
                        contacts.splice(index, 1);
                        // Update the contacts
                        this._contacts.next(contacts);
                        // Return the deleted status
                        return true;
                    })
                ))
        );
    }

    getContacts(): Observable<Contacts[]> {
        return this._httpClient.get<Contacts[]>(`${ApiService.apiVersion}${ApiService.apiContact}`).pipe(
            tap((response: any) => {
                this._contacts.next(response);
            })
        );
    }
}
