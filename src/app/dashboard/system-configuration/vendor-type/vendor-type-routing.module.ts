import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorTypeComponent } from './add-vendor-type/add-vendor-type.component';
import { EditVendorTypeComponent } from './edit-vendor-type/edit-vendor-type.component';
import { VendorTypeComponent } from './vendor-type.component';

const routes: Routes = [
  { path: '', component: VendorTypeComponent},
  { path: 'add', component: AddVendorTypeComponent},
  { path: 'edit/:id', component: EditVendorTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorTypeRoutingModule { }
