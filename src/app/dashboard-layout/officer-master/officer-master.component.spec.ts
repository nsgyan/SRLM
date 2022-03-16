import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerMasterComponent } from './officer-master.component';

describe('OfficerMasterComponent', () => {
  let component: OfficerMasterComponent;
  let fixture: ComponentFixture<OfficerMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
