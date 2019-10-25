import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  visibleSidebar1;

  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;
  constructor() { }

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }


  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

  sideclose() {
    this.visibleSidebar1 = false;
  }
}
