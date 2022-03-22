import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyComponentRoutingModule } from './agency-component-routing.module';
import { AddAgencyComponent } from './add-agency/add-agency.component';


@NgModule({
  declarations: [
    AddAgencyComponent
  ],
  imports: [
    CommonModule,
    AgencyComponentRoutingModule
  ]
})
export class AgencyComponentModule { }
