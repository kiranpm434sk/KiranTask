import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengcompComponent } from './primengcomp.component';

describe('PrimengcompComponent', () => {
  let component: PrimengcompComponent;
  let fixture: ComponentFixture<PrimengcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
