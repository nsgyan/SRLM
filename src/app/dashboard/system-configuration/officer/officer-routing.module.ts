import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOficerComponent } from './add-oficer/add-oficer.component';
import { OfficerEditComponent } from './officer-edit/officer-edit.component';
import { OfficerComponent } from './officer.component';

const routes: Routes = [
  { path: '', component: OfficerComponent},
  { path: 'add', component: AddOficerComponent},
  { path: 'edit/:id', component:OfficerEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerRoutingModule { }
