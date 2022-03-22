import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeRoutingModule } from './scheme-routing.module';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';


@NgModule({
  declarations: [
    AddSchemeComponent
  ],
  imports: [
    CommonModule,
    SchemeRoutingModule
  ]
})
export class SchemeModule { }
