import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorTypeRoutingModule } from './vendor-type-routing.module';
import { AddVendorTypeComponent } from './add-vendor-type/add-vendor-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorTypeComponent } from './vendor-type.component';
import { EditVendorTypeComponent } from './edit-vendor-type/edit-vendor-type.component';


@NgModule({
  declarations: [VendorTypeComponent,
    AddVendorTypeComponent,
    EditVendorTypeComponent
  ],
  imports: [
    CommonModule,
    VendorTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class VendorTypeModule { }
