import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddContactRoutingModule} from './add-contact-routing.module';
import {AddContactComponent} from './add-contact.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [AddContactComponent],
    imports: [
        CommonModule,
        AddContactRoutingModule,
        MatRadioModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class AddContactModule {
}
