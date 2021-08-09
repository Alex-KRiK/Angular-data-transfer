import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  transferredData: string;

  name: string;

  constructor() { }

  ngOnInit() {
  }

  sendData(data: string): void {
    // this.name = data;
  }

  getData(name: string) {
    // this.transferredData = name;
  }

  setChildrenData(childrenData: string): void {
    // this.transferredData = childrenData;
  }
}
