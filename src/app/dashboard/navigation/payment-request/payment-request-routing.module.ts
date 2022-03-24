import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentRequestComponent } from './payment-request.component';

const routes: Routes = [
  { path: '', component: PaymentRequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRequestRoutingModule { }
