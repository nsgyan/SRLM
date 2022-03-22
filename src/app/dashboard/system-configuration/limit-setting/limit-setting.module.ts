import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimitSettingRoutingModule } from './limit-setting-routing.module';
import { AddLimitComponent } from './add-limit/add-limit.component';


@NgModule({
  declarations: [
    AddLimitComponent
  ],
  imports: [
    CommonModule,
    LimitSettingRoutingModule
  ]
})
export class LimitSettingModule { }
