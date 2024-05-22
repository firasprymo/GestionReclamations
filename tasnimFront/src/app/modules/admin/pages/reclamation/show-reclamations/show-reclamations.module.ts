import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowReclamationsRoutingModule} from './show-reclamations-routing.module';
import {ShowReclamationsComponent} from './show-reclamations.component';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        ShowReclamationsComponent
    ],
    imports: [
        CommonModule,
        ShowReclamationsRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ShowReclamationsModule {
}
