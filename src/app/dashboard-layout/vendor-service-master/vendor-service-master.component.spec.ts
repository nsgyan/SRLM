import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServiceMasterComponent } from './vendor-service-master.component';

describe('VendorServiceMasterComponent', () => {
  let component: VendorServiceMasterComponent;
  let fixture: ComponentFixture<VendorServiceMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorServiceMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorServiceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
