import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddschemeTypeComponent } from './addscheme-type/addscheme-type.component';
import { EditschemeTypeComponent } from './editscheme-type/editscheme-type.component';
import { SchemeTypeListComponent } from './scheme-type-list/scheme-type-list.component';

const routes: Routes = [ { path: '', component: SchemeTypeListComponent },
{ path: 'add', component: AddschemeTypeComponent },
{ path: 'edit/:Id', component: EditschemeTypeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeTypeRoutingModule { }
