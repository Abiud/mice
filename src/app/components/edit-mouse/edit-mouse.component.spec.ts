import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMouseComponent } from './edit-mouse.component';

describe('EditMouseComponent', () => {
  let component: EditMouseComponent;
  let fixture: ComponentFixture<EditMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
