import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ContactsService} from '../../../../../shared/service/contacts.service';
import {CategoriesService} from '../../../../../shared/service/categories.service';
import {Categories} from '../../../../../shared/model/categories.types';
import {Stock} from '../../../../../shared/model/stocks.types';
import {Equipments} from '../../../../../shared/model/equipments.types';
import {StocksService} from '../../../../../shared/service/stocks.service';
import {EquipmentsService} from '../../../../../shared/service/equipments.service';

@Component({
    selector: 'app-add-stock',
    templateUrl: './add-stock.component.html',
    styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
    stockForm: FormGroup;
    idStock: number;
    isUpdate: boolean = false;
    equipments$: Observable<Equipments[]>;

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder,
                private _active: ActivatedRoute,
                private _router: Router,
                private _equipmentsService: EquipmentsService,
                private _stocksService: StocksService) {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.stockForm = this._formBuilder.group({
            availableEquipment: ['', Validators.required],
            quantity: ['', Validators.required],
            stockRecord: ['', Validators.required],
            location: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            equipmentId: ['', Validators.required],
        });
        this._active.params.subscribe((res) => {
            this.idStock = res.idStock;

        });
        this.equipments$ = this._equipmentsService.equipments$;
    }

    addStock(): void {
        this._stocksService.addStock(this.stockForm.value).subscribe((res: any) => {
            console.log(res);
            this._router.navigateByUrl('/pages/show-stocks');
        });
    }

    updateStock(): void {
        this._stocksService.editStock(this.stockForm.value).subscribe((res: any) => {
            console.log(res);
            this._router.navigateByUrl('/pages/show-stocks');
        });
    }

}

