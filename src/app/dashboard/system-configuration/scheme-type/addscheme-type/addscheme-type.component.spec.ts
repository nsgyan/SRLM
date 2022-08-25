import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschemeTypeComponent } from './addscheme-type.component';

describe('AddschemeTypeComponent', () => {
  let component: AddschemeTypeComponent;
  let fixture: ComponentFixture<AddschemeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschemeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddschemeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
