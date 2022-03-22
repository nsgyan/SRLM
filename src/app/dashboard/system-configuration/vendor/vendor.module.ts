import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';


@NgModule({
  declarations: [
    VendorComponent,
    AddVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
