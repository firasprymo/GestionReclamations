import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddCategoryRoutingModule} from './add-category-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {AddCategoryComponent} from './add-category.component';


@NgModule({
    declarations: [
        AddCategoryComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        AddCategoryRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
    ]
})
export class AddCategoryModule {
}
