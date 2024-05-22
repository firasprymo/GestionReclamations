import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowStocksRoutingModule } from './show-stocks-routing.module';
import { ShowStocksComponent } from './show-stocks.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../../shared/material/material.module';


@NgModule({
  declarations: [
    ShowStocksComponent
  ],
    imports: [
        CommonModule,
        ShowStocksRoutingModule,
        MaterialModule,
        ReactiveFormsModule

    ]
})
export class ShowStocksModule { }
