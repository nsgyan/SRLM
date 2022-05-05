import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeComponentListViewComponent } from './scheme-component-list-view.component';

describe('SchemeComponentListViewComponent', () => {
  let component: SchemeComponentListViewComponent;
  let fixture: ComponentFixture<SchemeComponentListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeComponentListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeComponentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
