import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Themes } from './constants/theme.constant';
import { AppService } from './services/app.service';

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
