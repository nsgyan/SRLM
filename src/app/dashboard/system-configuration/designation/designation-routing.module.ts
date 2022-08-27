import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { DesignationComponent } from './designation.component';
import { EditDesignationComponent } from './edit-designation/edit-designation.component';

const routes: Routes = [
  { path: '', component: DesignationComponent },
  { path: 'add', component: AddDesignationComponent },
  { path: 'edit/:id', component: EditDesignationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
