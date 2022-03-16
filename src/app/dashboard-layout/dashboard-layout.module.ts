import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutRouting} from './dashboard-layout-routing.module';
import { SchemeMasterComponent } from './scheme-master/scheme-master.component';
import { OfficeMasterComponent } from './office-master/office-master.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { OfficerMasterComponent } from './officer-master/officer-master.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { VendorTypeMasterComponent } from './vendor-type-master/vendor-type-master.component';
import { VendorServiceMasterComponent } from './vendor-service-master/vendor-service-master.component';
import { AgencyComponentMasterComponent } from './agency-component-master/agency-component-master.component';
import { BeneficiaryMasterComponent } from './beneficiary-master/beneficiary-master.component';
import { BankMasterComponent } from './bank-master/bank-master.component';
import { IfscMasterComponent } from './ifsc-master/ifsc-master.component';
import { SetLimitsComponent } from './set-limits/set-limits.component';
import { DemandRequestsComponent } from './demand-requests/demand-requests.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    SchemeMasterComponent,
    OfficeMasterComponent,
    DesignationMasterComponent,
    OfficerMasterComponent,
    VendorMasterComponent,
    VendorTypeMasterComponent,
    VendorServiceMasterComponent,
    AgencyComponentMasterComponent,
    BeneficiaryMasterComponent,
    BankMasterComponent,
    IfscMasterComponent,
    SetLimitsComponent,
    DemandRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRouting),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class DashboardLayoutModule { }
