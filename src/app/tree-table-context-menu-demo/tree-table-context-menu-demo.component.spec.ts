import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableContextMenuDemoComponent } from './tree-table-context-menu-demo.component';

describe('TreeTableContextMenuDemoComponent', () => {
  let component: TreeTableContextMenuDemoComponent;
  let fixture: ComponentFixture<TreeTableContextMenuDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeTableContextMenuDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTableContextMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
