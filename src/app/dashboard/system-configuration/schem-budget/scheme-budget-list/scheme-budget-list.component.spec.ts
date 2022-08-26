import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeBudgetListComponent } from './scheme-budget-list.component';

describe('SchemeBudgetListComponent', () => {
  let component: SchemeBudgetListComponent;
  let fixture: ComponentFixture<SchemeBudgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeBudgetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeBudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
