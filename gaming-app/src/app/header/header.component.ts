import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../services/app.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgetUsernamePasswordComponent } from '../forget-username-password/forget-username-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showHide = true;
  selectedTab: string = 'home';
  accountNumber: number = 1234567890;
  currency = '1,031,567';
  selectedLang = 'ENG';
  countryImg = 'assets/images/flags/us.png';
  theme: 'dark-theme' | 'white-theme' = 'dark-theme';
  dateTime = new Date().toISOString();
  isLoggedIn: boolean = false;

  constructor(private appService: AppService, public matDialog: MatDialog) {
    this.isLoggedInFn()
  }
  isLoggedInFn() {
    this.appService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  ngOnInit(): void {

  }
  toggleTheme(theme: 'dark-theme' | 'white-theme') {
    this.theme = theme == 'dark-theme' ? 'white-theme' : 'dark-theme';
    this.appService.setTheme(this.theme);
  }
  login() {
    this.matDialog.open(LoginComponent, {
      width: '744px',
      height: '579px',
      // disableClose: true,
      autoFocus: false,
      data: {
      }

    }).afterClosed().subscribe((val) => {
      if (val === 'createAccount') {
        this.register();
      }
      if (val === 'forget-username-password') {
        this.forgetPassword();
      }
    })
  }

  forgetPassword() {
    this.matDialog.open(ForgetUsernamePasswordComponent, {
      width: '465px',
      height: '450px',
      // disableClose: true,
      autoFocus: false,
      data: {

      }
    }).afterClosed().subscribe((val) => {
      if (val === 'createAccount') {
        this.register();
      }
    })
  }
  register() {
    this.matDialog.open(RegisterComponent, {
      width: '998px',
      height: '580px',
      // disableClose: true,
      autoFocus: false,
      data: {

      }
    }).afterClosed().subscribe((val) => {
      if (val === 'login') {
        this.login();
      }
    })
  }
  show() {
    this.showHide = !this.showHide;
    console.log('showHide')
  }
}
