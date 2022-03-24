import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRequestRoutingModule } from './payment-request-routing.module';
import { PaymentRequestListViewComponent } from './payment-request-list-view/payment-request-list-view.component';


@NgModule({
  declarations: [
    PaymentRequestListViewComponent
  ],
  imports: [
    CommonModule,
    PaymentRequestRoutingModule
  ]
})
export class PaymentRequestModule { }
