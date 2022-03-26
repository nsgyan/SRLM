import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-request-list-view',
  templateUrl: './payment-request-list-view.component.html',
  styleUrls: ['./payment-request-list-view.component.css']
})
export class PaymentRequestListViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addpaymentRequest() {
    this.router.navigate(['/dashboard/navigation/payment-request/add'])
  }

}
