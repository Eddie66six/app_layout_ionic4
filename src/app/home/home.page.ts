import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('header') header: ElementRef;

  public items: Array<number>;
  public newHeaderHeight: any;
  public headerHeight: number;

  constructor(){
    this.items = [];
  }

  ngOnInit() {
    for (let index = 0; index < 20; index++) {
      this.items.push(index);
    }

    this.headerHeight = 100
    let el = document.getElementById("headerHeight");
    el.style.height = this.headerHeight + 'px';
  }
  onScroll(ev){
    this.newHeaderHeight = this.headerHeight - ev.detail.scrollTop;
    if (this.newHeaderHeight < 0) {
      this.newHeaderHeight = 0;
    }
    let el = document.getElementById("headerHeight");
    el.style.height = this.newHeaderHeight + 'px';
  }
}
