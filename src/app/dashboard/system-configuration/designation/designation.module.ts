import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { DesignationComponent } from './designation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDesignationComponent } from './edit-designation/edit-designation.component';



@NgModule({
  declarations: [
    DesignationComponent,
    AddDesignationComponent,
    EditDesignationComponent,
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DesignationModule { }
