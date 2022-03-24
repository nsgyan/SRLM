import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentRequestListViewComponent } from './payment-request-list-view/payment-request-list-view.component';
import { PaymentRequestComponent } from './payment-request.component';

const routes: Routes = [
  { path: '', component: PaymentRequestComponent},
  { path: 'add', component: PaymentRequestListViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRequestRoutingModule { }
