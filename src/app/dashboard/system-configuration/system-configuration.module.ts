import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeComponent } from './scheme/scheme.component';
import { OfficeComponent } from './office/office.component';
import { DesignationComponent } from './designation/designation.component';
import { OfficerComponent } from './officer/officer.component';
import { VendorTypeComponent } from './vendor-type/vendor-type.component';
import { VendorServiceComponent } from './vendor-service/vendor-service.component';
import { AgencyComponentComponent } from './agency-component/agency-component.component';
import { LimitSettingComponent } from './limit-setting/limit-setting.component';
import { BanksComponent } from './banks/banks.component';



@NgModule({
  declarations: [
    SchemeComponent,
    OfficeComponent,
    DesignationComponent,
    OfficerComponent,
    VendorTypeComponent,
    VendorServiceComponent,
    AgencyComponentComponent,
    LimitSettingComponent,
    BanksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SystemConfigurationModule { }
