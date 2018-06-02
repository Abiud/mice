import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMouseComponent } from './add-mouse.component';

describe('AddMouseComponent', () => {
  let component: AddMouseComponent;
  let fixture: ComponentFixture<AddMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
