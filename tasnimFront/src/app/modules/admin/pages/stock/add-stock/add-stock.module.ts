import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddStockRoutingModule} from './add-stock-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {ReversePipeModule} from '@fuse/pipes/reverse/reverse.module';
import {AddStockComponent} from './add-stock.component';


@NgModule({
    declarations: [
        AddStockComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        AddStockRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        ReversePipeModule,

    ]
})
export class AddStockModule {
}
