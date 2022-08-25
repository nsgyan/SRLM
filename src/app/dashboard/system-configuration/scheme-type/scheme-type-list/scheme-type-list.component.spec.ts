import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeTypeListComponent } from './scheme-type-list.component';

describe('SchemeTypeListComponent', () => {
  let component: SchemeTypeListComponent;
  let fixture: ComponentFixture<SchemeTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
