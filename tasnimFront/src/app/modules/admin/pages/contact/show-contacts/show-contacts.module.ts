import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowContactsRoutingModule} from './show-contacts-routing.module';
import {ShowContactsComponent} from './show-contacts.component';
import {MaterialModule} from '../../../../../shared/material/material.module';


@NgModule({
    declarations: [
        ShowContactsComponent
    ],
    imports: [
        CommonModule,
        ShowContactsRoutingModule,
        MaterialModule
    ]
})
export class ShowContactsModule {
}
