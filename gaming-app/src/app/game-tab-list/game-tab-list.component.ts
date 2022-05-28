import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-tab-list',
  templateUrl: './game-tab-list.component.html',
  styleUrls: ['./game-tab-list.component.scss']
})
export class GameTabListComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef;
  searchText: string;
  selectedItem: { id: string, title: string, iconUrl: string } = { id: '', title: '', iconUrl: '' };
  providers: { value: string, viewValue: string }[] = [{ value: 'item 1', viewValue: 'item_1' }, { value: 'item 2', viewValue: 'item_2' }, { value: 'item 3', viewValue: 'item_3' }]
  gameTheme: { value: string, viewValue: string }[] = [{ value: 'item 1', viewValue: 'item_1' }, { value: 'item 2', viewValue: 'item_2' }, { value: 'item 3', viewValue: 'item_3' }]
  sortby: { value: string, viewValue: string }[] = [{ value: 'item 1', viewValue: 'item_1' }, { value: 'item 2', viewValue: 'item_2' }, { value: 'item 3', viewValue: 'item_3' }]
  gameContentList: { id: string, title: string, iconUrl: string }[] = [
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-1.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-2.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-3.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-4.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-6.png' }
  ];
  selectedIndex: number = 0;
  searchTextForSearch: string;
  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.gameContentList[0];
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollLeft -= 150;
  }
  scrollRight() {
    this.scrollContainer.nativeElement.scrollLeft += 150;
  }

  setSearchTerm(searchTerm: string) {
    this.searchTextForSearch = searchTerm;
  }
}
