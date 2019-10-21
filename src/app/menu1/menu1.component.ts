import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  visibleSidebar1;
  constructor() { }

  ngOnInit() {
  }
  sideclose() {
    this.visibleSidebar1 = false;
  }
}
