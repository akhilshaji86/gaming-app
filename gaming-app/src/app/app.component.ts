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
      '--background-color-primary': '#555555',
      '--background-color-secondary': '#828282',
      '--orange-background-color': '#df6a2e',
      '--orange-background-color-dim': '#df6a2ec2',
      '--background-color-dark': '#adadad',
      '--background-color-light': '#dadada',
      '--table-color': '#d7d7d7',
      '--table-border': '#bdbdbd',
      '--tab-color': '#949494',
      '--dark-background-color': '#e6e6e6',
      '--expand-background-color': '#bebebe',
      '--dull-background-color': '#aeaeae',
    },
    'dark-theme': {
      '--text-color': '#ffffff',
      '--background-color': '#2a2a2a',
      '--background-color-primary': '#aaaaaa',
      '--background-color-secondary': '#505050',
      '--orange-background-color': '#df6a2e',
      '--orange-background-color-dim': '#df6a2ec2',
      '--background-color-dark': 'black',
      '--background-color-light': '#262626',
      '--table-color': '#292929',
      '--table-border': '#2b2b2b',
      '--tab-color': '#303030',
      '--dark-background-color': '#191919',
      '--expand-background-color': '#414141',
      '--dull-background-color': '#515151'
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
