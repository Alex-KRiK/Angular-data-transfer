import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @Input() companyName: string;

  constructor(
    private readonly appService: AppService
  ) { }

  ngOnInit() {
  }

  sendData(data: string): void {
    this.appService.currentDay$.next(data);
  }

}
