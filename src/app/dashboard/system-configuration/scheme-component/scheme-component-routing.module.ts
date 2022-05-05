import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddschemeComponentComponent } from './addscheme-component/addscheme-component.component';
import { SchemeComponentListViewComponent } from './scheme-component-list-view/scheme-component-list-view.component';

const routes: Routes = [
  { path: '', component: SchemeComponentListViewComponent },
  { path: 'add', component: AddschemeComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeComponentRoutingModule { }
