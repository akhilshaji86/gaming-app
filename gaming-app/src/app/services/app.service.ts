import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  theme: 'dark-theme' | 'white-theme' = 'dark-theme';
  themeSubject = new BehaviorSubject<'dark-theme' | 'white-theme'>(this.theme);
  loggedInSubject = new BehaviorSubject<boolean>(false);
  constructor(private snackBar: MatSnackBar) {
    this.setTheme('dark-theme');
  }
  setTheme(theme: 'dark-theme' | 'white-theme') {
    this.themeSubject.next(theme);
  }
  getTheme() {
    return this.themeSubject.asObservable();
  }
  setLoggedIn(loggedIn: boolean) {
    this.loggedInSubject.next(loggedIn);
  }
  
  isLoggedIn() {
    return this.loggedInSubject.asObservable();
  }
  showToaster(message: string, action: string, duration: number=30000) {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'toaster'
    });
  }
}
