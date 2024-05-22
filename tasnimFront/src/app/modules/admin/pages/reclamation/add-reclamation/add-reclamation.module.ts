import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReclamationRoutingModule } from './add-reclamation-routing.module';
import {MaterialModule} from '../../../../../shared/material/material.module';
import {AddReclamationComponent} from './add-reclamation.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddReclamationComponent],
  imports: [
    CommonModule,
    AddReclamationRoutingModule,
      MaterialModule,
      ReactiveFormsModule
  ]
})
export class AddReclamationModule { }
