import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorTypeRoutingModule } from './vendor-type-routing.module';
import { AddVendorTypeComponent } from './add-vendor-type/add-vendor-type.component';


@NgModule({
  declarations: [
    AddVendorTypeComponent
  ],
  imports: [
    CommonModule,
    VendorTypeRoutingModule
  ]
})
export class VendorTypeModule { }
