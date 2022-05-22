import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  theme: 'dark-theme' | 'white-theme' = 'dark-theme';
  themeSubject = new BehaviorSubject<'dark-theme' | 'white-theme'>(this.theme);
  constructor() {
    this.setTheme('dark-theme');
  }
  setTheme(theme: 'dark-theme' | 'white-theme') {
    this.themeSubject.next(theme);
  }
  

}
