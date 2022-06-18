import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForgetUsernamePasswordResModel } from '../models/forget-username-password.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }
  forgetUsernamePassword(login: string, email: string): Observable<ForgetUsernamePasswordResModel> {
    // return http.post('/api/forget-username-password', { login, email });
    return of({ message: 'link to reset ' + login + ' password sent to ' + email });
  }

}
