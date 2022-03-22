import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AgencyComponentComponent } from './system-configuration/agency-component/agency-component.component';
import { BanksComponent } from './system-configuration/banks/banks.component';
import { DesignationComponent } from './system-configuration/designation/designation.component';
import { LimitSettingComponent } from './system-configuration/limit-setting/limit-setting.component';
import { OfficeComponent } from './system-configuration/office/office.component';
import { OfficerComponent } from './system-configuration/officer/officer.component';
import { SchemeComponent } from './system-configuration/scheme/scheme.component';
import { VendorServiceComponent } from './system-configuration/vendor-service/vendor-service.component';
import { VendorTypeComponent } from './system-configuration/vendor-type/vendor-type.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'officer', component: OfficerComponent },
  { path: 'vendorType', component: VendorTypeComponent },
  { path: 'vendorService', component: VendorServiceComponent },
  { path: 'agencyComponent', component: AgencyComponentComponent },
  { path: 'bank', component: BanksComponent },
  { path: 'limitSetting',        component: LimitSettingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
