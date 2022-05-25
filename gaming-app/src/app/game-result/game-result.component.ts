import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  @Input() selectedGameList: { id: string, title: string, iconUrl: string };
  @Input() selectedIndex: number;
  @ViewChild('gameResult') gameResult: ElementRef;
  itemList: { id: string, title: string, subTitle: string, iconUrl: string }[] = [
    { id: Math.random() * 100 + 1 + '', title: 'item', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/game-1.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/game-2.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/game-3.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/game-4.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/game-6.png' },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
