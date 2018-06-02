import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMouseComponent } from './remove-mouse.component';

describe('RemoveMouseComponent', () => {
  let component: RemoveMouseComponent;
  let fixture: ComponentFixture<RemoveMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
