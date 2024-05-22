import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable, Subject} from 'rxjs';
import {ApiService} from '../../../../../shared/service/api.service';
import {
    InventoryBrand,
    InventoryCategory,
    InventoryPagination,
    InventoryVendor
} from '../../../apps/ecommerce/inventory/inventory.types';
import {FormBuilder, Validators} from '@angular/forms';
import {FuseConfirmationService} from '@fuse/services/confirmation';
import {ReclamationsService} from '../../../../../shared/service/reclamations.service';
import {takeUntil} from 'rxjs/operators';
import {Reclamations} from '../../../../../shared/model/reclamations.types';
import {InventoryService} from '../../../apps/ecommerce/inventory/inventory.service';
import {Stock} from '../../../../../shared/model/stocks.types';
import {StocksService} from '../../../../../shared/service/stocks.service';

@Component({
    selector: 'app-show-stocks',
    templateUrl: './show-stocks.component.html',
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
                    grid-template-columns: 148px 112px 112px 112px 112px 96px 96px 72px;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class ShowStocksComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    stocks$: Observable<Stock[]>;
    apiImg = ApiService.apiPicture;
    isLoading: boolean = false;
    pagination: InventoryPagination;
    selectedStock: Stock | null = null;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private _formBuilder: FormBuilder,
        private _stocksService: StocksService,
        private _inventoryService: InventoryService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        // Get the pagination
        this.stocks$ = this._stocksService.stocks$;
        this._stocksService.pagination$.pipe(takeUntil(this._unsubscribeAll)).subscribe((pagination: InventoryPagination) => {
            // Update the pagination
            this.pagination = pagination;
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
        this.stocks$ = this._stocksService.stocks$;

    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        if (this._sort && this._paginator) {
            this._sort.sort({
                id: 'name',
                start: 'asc',
                disableClear: true
            });
            this._changeDetectorRef.markForCheck();
            this._sort.sortChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
                this._paginator.pageIndex = 0;
                this.closeDetails();
            });
        }
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
     * Close the details
     */
    closeDetails(): void {
    }

    /**
     * Delete the selected product using the form data
     */
    deleteSelectedStock(stock: Stock): void {
        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete Course',
            message: 'Are you sure you want to remove this course? This action cannot be undone!',
            actions: {
                confirm: {
                    label: 'Delete'
                }
            }
        });

        confirmation.afterClosed().subscribe((result) => {
            if (result === 'confirmed') {
                this._stocksService.deleteStock(stock).subscribe(() => {

                    // Close the details
                    this.closeDetails();
                });
            }
        });
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }


}

