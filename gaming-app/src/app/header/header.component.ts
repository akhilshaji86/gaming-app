import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedTab: string = 'home';
  accountNumber: number = 1234567890;
  currency = '1,031,567';
  dateTime = new Date().toISOString();
  constructor() { }
  ngOnInit(): void {
  }

}
