import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemConfigurationRoutingModule } from './system-configuration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from 'src/app/shared/service/service.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SystemConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ]
})
export class SystemConfigurationModule { }
