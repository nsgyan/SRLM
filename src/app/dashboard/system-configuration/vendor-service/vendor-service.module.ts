import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorServiceRoutingModule } from './vendor-service-routing.module';
import { AddVendorServiceComponent } from './add-vendor-service/add-vendor-service.component';


@NgModule({
  declarations: [
    AddVendorServiceComponent
  ],
  imports: [
    CommonModule,
    VendorServiceRoutingModule
  ]
})
export class VendorServiceModule { }
