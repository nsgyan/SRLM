import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerRoutingModule } from './officer-routing.module';
import { AddOficerComponent } from './add-oficer/add-oficer.component';


@NgModule({
  declarations: [
    AddOficerComponent
  ],
  imports: [
    CommonModule,
    OfficerRoutingModule
  ]
})
export class OfficerModule { }
