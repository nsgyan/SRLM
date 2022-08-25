import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschemeTypeComponent } from './editscheme-type.component';

describe('EditschemeTypeComponent', () => {
  let component: EditschemeTypeComponent;
  let fixture: ComponentFixture<EditschemeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditschemeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditschemeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
