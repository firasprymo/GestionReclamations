import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ContactsService} from '../../../../../shared/service/contacts.service';
import {takeUntil} from 'rxjs/operators';
import {Contacts} from '../../../../../shared/model/contacts.types';
import {Equipments} from '../../../../../shared/model/equipments.types';
import {FuseConfirmationService} from '../../../../../../@fuse/services/confirmation';
import {InventoryPagination} from '../../../apps/ecommerce/inventory/inventory.types';
import {fuseAnimations} from '../../../../../../@fuse/animations';

@Component({
    selector: 'app-show-contacts',
    templateUrl: './show-contacts.component.html',
    styles: [
        /* language=SCSS */
        `
            .inventory-grid {
                grid-template-columns: 48px auto 40px;

                @screen sm {
                    grid-template-columns: 48px auto 112px 72px;
                }

                @screen md {
                    grid-template-columns: 48px 112px auto 112px 72px;
                }

                @screen lg {
                    grid-template-columns: 112px 148px  112px 96px 96px 72px;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations

})
export class ShowContactsComponent implements OnInit, OnDestroy {
    contacts$: Observable<Contacts[]>;
    pagination: InventoryPagination;
    isLoading: boolean = false;

    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * Constructor
     */
    constructor(private _contactsService: ContactsService,
                private _changeDetectorRef: ChangeDetectorRef,
                private _fuseConfirmationService: FuseConfirmationService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the FAQs
        this.contacts$ = this._contactsService.contacts$;
        this._contactsService.pagination$.pipe(takeUntil(this._unsubscribeAll)).subscribe((pagination: InventoryPagination) => {
            // Update the pagination
            this.pagination = pagination;
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    deleteSelectedContact(contacts: Contacts): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete Equipment',
            message: 'Are you sure you want to remove this equipment? This action cannot be undone!',
            actions: {
                confirm: {
                    label: 'Delete'
                }
            }
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {

            // If the confirm button pressed...
            if (result === 'confirmed') {

                // Get the product object

                // Delete the product on the server
                this._contactsService.deleteContact(contacts).subscribe(() => {

                    // Close the details
                    this.closeDetails();
                });
            }
        });
    }

    closeDetails(): void {
    }

}
