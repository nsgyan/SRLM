import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AddDistrictMasterComponent } from './add-district-master/add-district-master.component';


@NgModule({
  declarations: [
    AddDesignationComponent,
    AddDistrictMasterComponent
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule
  ]
})
export class DesignationModule { }
