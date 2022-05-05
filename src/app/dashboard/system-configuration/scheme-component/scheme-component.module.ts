import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeComponentRoutingModule } from './scheme-component-routing.module';
import { SchemeComponentListViewComponent } from './scheme-component-list-view/scheme-component-list-view.component';
import { AddschemeComponentComponent } from './addscheme-component/addscheme-component.component';


@NgModule({
  declarations: [
    SchemeComponentListViewComponent,
    AddschemeComponentComponent
  ],
  imports: [
    CommonModule,
    SchemeComponentRoutingModule
  ]
})
export class SchemeComponentModule { }
