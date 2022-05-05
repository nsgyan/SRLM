import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschemeComponentComponent } from './addscheme-component.component';

describe('AddschemeComponentComponent', () => {
  let component: AddschemeComponentComponent;
  let fixture: ComponentFixture<AddschemeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschemeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddschemeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
