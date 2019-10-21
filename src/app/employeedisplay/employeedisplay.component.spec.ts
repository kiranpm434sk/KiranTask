import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedisplayComponent } from './employeedisplay.component';

describe('EmployeedisplayComponent', () => {
  let component: EmployeedisplayComponent;
  let fixture: ComponentFixture<EmployeedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
