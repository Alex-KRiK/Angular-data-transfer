import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { filter, takeUntil } from 'rxjs/operators'
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  companyName: string;

  private componentDestroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private readonly appService: AppService
  ) { }

  ngOnInit() {
    // this.setCurrentDaySubscription();
  }

  // Step 3 ngIf
  // private setCurrentDaySubscription(): void {
  //   this.appService.currentDay$
  //     .pipe(
  //       filter((data: string) => !!data),
  //       takeUntil(this.componentDestroy$)
  //     )
  //     .subscribe((data: string) => this.companyName = data);
  // }

  sendData(data: string): void {
    
  }

  getCompanyName(): string {
    return this.appService.companyName;
  }

}
