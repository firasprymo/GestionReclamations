import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddEquipmentRoutingModule} from './add-equipment-routing.module';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {AddEquipmentComponent} from './add-equipment.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AddEquipmentComponent
    ],
    imports: [
        CommonModule,
        AddEquipmentRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class AddEquipmentModule {
}
