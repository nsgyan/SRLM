import { Routes } from '@angular/router';
import { AgencyComponentMasterComponent } from './agency-component-master/agency-component-master.component';
import { BankMasterComponent } from './bank-master/bank-master.component';
import { BeneficiaryMasterComponent } from './beneficiary-master/beneficiary-master.component';
import { DemandRequestsComponent } from './demand-requests/demand-requests.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { IfscMasterComponent } from './ifsc-master/ifsc-master.component';
import { OfficeMasterComponent } from './office-master/office-master.component';
import { OfficerMasterComponent } from './officer-master/officer-master.component';
import { SchemeMasterComponent } from './scheme-master/scheme-master.component';
import { SetLimitsComponent } from './set-limits/set-limits.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { VendorServiceMasterComponent } from './vendor-service-master/vendor-service-master.component';
import { VendorTypeMasterComponent } from './vendor-type-master/vendor-type-master.component';



export const DashboardLayoutRouting: Routes = [
    { path: 'schemeMaster',      component: SchemeMasterComponent },
    { path: 'officeMaster',   component: OfficeMasterComponent },
    { path: 'designationMaster',     component: DesignationMasterComponent },
    { path: 'officerMaster',     component: OfficerMasterComponent },
    { path: 'vendorMaster',          component:VendorMasterComponent },
    { path: 'vendorTypeMaster',           component: VendorTypeMasterComponent },
    { path: 'vendorServiceMaster',  component: VendorServiceMasterComponent },
    { path: 'agencyComponentMaster',        component: AgencyComponentMasterComponent },
    { path: 'beneficiaryMaster',        component: BeneficiaryMasterComponent },
    { path: 'setLimits',        component: SetLimitsComponent},
    { path: 'demandRequests',        component: DemandRequestsComponent },
    { path: 'bankMaster',        component: BankMasterComponent },
    { path: 'ifscMaster',        component: IfscMasterComponent },
    
    
];
