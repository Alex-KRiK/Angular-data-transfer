import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly http: HttpClient
  ) { }

  loadAllUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://gorest.co.in/public/v1/users')
      .pipe(catchError(error => { throw error })
    );
  }
}
