import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedTab: string = 'home';
  accountNumber: number = 1234567890;
  currency = '1,031,567';
  selectedLang = 'ENG';
  countryImg = 'assets/images/flags/us.png';
  theme: 'dark-theme' | 'white-theme' = 'dark-theme';
  dateTime = new Date().toISOString();
  constructor(private appService: AppService) { }
  ngOnInit(): void {

  }
  toggleTheme(theme: 'dark-theme' | 'white-theme') {
    this.theme = theme == 'dark-theme' ? 'white-theme' : 'dark-theme';
    this.appService.setTheme(this.theme);
  }

}
