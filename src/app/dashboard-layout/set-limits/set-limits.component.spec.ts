import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLimitsComponent } from './set-limits.component';

describe('SetLimitsComponent', () => {
  let component: SetLimitsComponent;
  let fixture: ComponentFixture<SetLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
