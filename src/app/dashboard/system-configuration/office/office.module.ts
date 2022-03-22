import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office/office.component';
import { AddOfficeComponent } from './add-office/add-office.component';


@NgModule({
  declarations: [
    OfficeComponent,
    AddOfficeComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ]
})
export class OfficeModule { }
