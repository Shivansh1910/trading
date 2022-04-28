import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed1 = true;
  modify: boolean = false;
  addStock: boolean = false;
  constructor() { }

  ngOnInit() { }

  exit() {
    console.log('exit function called')
  }

  modifyFunction() {
    this.modify = true;
  }

  savemodify() {
    this.modify = false;
    console.log('saved modify')
  }

  addstock() {
    this.addStock = true;
  }

}
