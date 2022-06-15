import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { url } from 'inspector';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  imagesPath = '../../assets/images/game-select/';
  images : any = [
    {
      id: 1,
      name: 'All Game',
      image: 'url(' + this.imagesPath + "1.jpg" +')'
    },
    {
      id: 2,
      name: 'Machine Game',
      image: 'url(' + this.imagesPath + "2.jpg" +')'
    },
    {
      id: 3,
      name: 'Roulette Game',
      image: 'url(' + this.imagesPath + "3.jpg" +')'
    },
    {
      id: 4,
      name: 'Cards Game',
      image: 'url(' + this.imagesPath + "4.jpg" +')'
    }
  ];
  @Input() selectedGameList: { id: string, title: string, iconUrl: string };
  @Input() selectedIndex: number;
  private _searchText: string;
  itemList: { id: string, title: string, subTitle: string, iconUrl: string }[];
  @Input() get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    if (!!value) {
      this._searchText = value;
      this.filterItemList(value);
    } else {
      this.itemList = this._itemList;
    }
  }
  @ViewChild('gameResult') gameResult: ElementRef;
  _itemList: { id: string, title: string, subTitle: string, iconUrl: string }[] = [
    { id: Math.random() * 100 + 1 + '', title: 'item 1', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/1.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item 2', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/2.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item 3', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/3.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item 4', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/4.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item 5', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'item 6', subTitle: 'sub-title', iconUrl: '../../../assets/images/game-tab-list/6.png' },
  ]
  constructor() {
    this.itemList = this._itemList;
  }

  ngOnInit(): void {
  }
  filterItemList(value: string, selectedGameList?: { id: string; title: string; iconUrl: string; }) {
    this.itemList = this._itemList.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
  }
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
