import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerRoutingModule } from './officer-routing.module';
import { AddOficerComponent } from './add-oficer/add-oficer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddOficerComponent
  ],
  imports: [
    CommonModule,
    OfficerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OfficerModule { }
