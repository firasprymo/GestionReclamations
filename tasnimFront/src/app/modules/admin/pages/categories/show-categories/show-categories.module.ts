import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowCategoriesRoutingModule} from './show-categories-routing.module';
import {ShowCategoriesComponent} from './show-categories.component';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ShowCategoriesComponent],
    imports: [
        CommonModule,
        ShowCategoriesRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ShowCategoriesModule {
}
