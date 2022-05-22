import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'gaming-app';
  themes = {
    'white-theme': {
      '--text-color': '#000000',
      '--background-color': '#c3c3c3',
      '--background-color-primary': '#aaaaaa',
      '--background-color-secondary': '#6f6767',
      '--orange-background-color': '#df6a2e',
      '--background-color-dark': '#adadad',
      '--background-color-light': '#dadada',
    },
    'dark-theme': {
      '--text-color': '#ffffff',
      '--background-color': '#2a2a2a',
      '--background-color-primary': '#aaaaaa',
      '--background-color-secondary': '#6f6767',
      '--orange-background-color': '#df6a2e',
      '--background-color-dark': 'black',
      '--background-color-light': '#262626',

    }
  }

  constructor(@Inject(DOCUMENT) private document: Document, private appService: AppService) { }

  ngOnInit() {
    // this.document.body.classList.add('white-theme');
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
