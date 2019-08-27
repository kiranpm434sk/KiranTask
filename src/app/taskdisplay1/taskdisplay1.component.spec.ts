import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskdisplay1Component } from './taskdisplay1.component';

describe('Taskdisplay1Component', () => {
  let component: Taskdisplay1Component;
  let fixture: ComponentFixture<Taskdisplay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taskdisplay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taskdisplay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
