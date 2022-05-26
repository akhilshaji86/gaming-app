import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';
import { Themes } from './constants/theme.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'gaming-app';
  themes = Themes;

  constructor(@Inject(DOCUMENT) private document: Document, private appService: AppService) { }

  ngOnInit() {
    this.appService.themeSubject.subscribe(theme => {
      this.activateTheme(this.themes[theme]);
    });
  }
  activateTheme(theme: any) {
    for (let prop in theme) {
      (<any>this.document).querySelector(':root').style.setProperty(prop, theme[prop]);
    }
  }
}
