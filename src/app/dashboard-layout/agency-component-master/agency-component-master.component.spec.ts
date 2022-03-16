import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyComponentMasterComponent } from './agency-component-master.component';

describe('AgencyComponentMasterComponent', () => {
  let component: AgencyComponentMasterComponent;
  let fixture: ComponentFixture<AgencyComponentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyComponentMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyComponentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
