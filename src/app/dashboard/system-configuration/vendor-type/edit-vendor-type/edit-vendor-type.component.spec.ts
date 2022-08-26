import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorTypeComponent } from './edit-vendor-type.component';

describe('EditVendorTypeComponent', () => {
  let component: EditVendorTypeComponent;
  let fixture: ComponentFixture<EditVendorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVendorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
