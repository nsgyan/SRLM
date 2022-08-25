import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschemeComponent } from './editscheme.component';

describe('EditschemeComponent', () => {
  let component: EditschemeComponent;
  let fixture: ComponentFixture<EditschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditschemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
