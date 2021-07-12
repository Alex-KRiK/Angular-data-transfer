import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Step 4
  currentDay$: BehaviorSubject<string> = new BehaviorSubject(null);

  // Step 3 
  private name: string;

  constructor() { }

  // Step 3 
  setCompanyName(data: string): void {
    this.name = data;
  }

  get companyName(): string {
    return this.name;
  }

  // Step 4


}
