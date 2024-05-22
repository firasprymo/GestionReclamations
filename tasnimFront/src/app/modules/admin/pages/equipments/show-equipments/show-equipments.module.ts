import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowEquipmentsRoutingModule} from './show-equipments-routing.module';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {ShowEquipmentsComponent} from './show-equipments.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        ShowEquipmentsComponent
    ],
    imports: [
        CommonModule,
        ShowEquipmentsRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ShowEquipmentsModule {
}
