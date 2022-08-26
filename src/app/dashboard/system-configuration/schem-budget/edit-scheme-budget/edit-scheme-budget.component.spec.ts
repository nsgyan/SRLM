import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchemeBudgetComponent } from './edit-scheme-budget.component';

describe('EditSchemeBudgetComponent', () => {
  let component: EditSchemeBudgetComponent;
  let fixture: ComponentFixture<EditSchemeBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSchemeBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchemeBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
