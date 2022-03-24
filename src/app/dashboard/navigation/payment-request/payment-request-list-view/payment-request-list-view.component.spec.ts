import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestListViewComponent } from './payment-request-list-view.component';

describe('PaymentRequestListViewComponent', () => {
  let component: PaymentRequestListViewComponent;
  let fixture: ComponentFixture<PaymentRequestListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRequestListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
