import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForgetUsernamePasswordReqModel, ForgetUsernamePasswordResModel } from '../models/forget-username-password.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }
  forgetUsernamePassword(req: ForgetUsernamePasswordReqModel): Observable<ForgetUsernamePasswordResModel> {
    // return http.post('/api/forget-username-password', { login, email });
    return of({ message: 'link to reset ' + req.login + ' password sent to ' + req.email });
  }

}
