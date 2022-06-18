import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GameType } from '../models/game-list.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-tab-list',
  templateUrl: './game-tab-list.component.html',
  styleUrls: ['./game-tab-list.component.scss']
})
export class GameTabListComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef;
  searchText: string;
  @Input() selectedItem: GameType = { id: '', title: '', iconUrl: '' };
  providers: { value: string, viewValue: string }[] = [{ value: 'item 1', viewValue: 'item_1' }, { value: 'item 2', viewValue: 'item_2' }, { value: 'item 3', viewValue: 'item_3' }]
  gameTheme: { value: string, viewValue: string }[] = [{ value: 'item 1', viewValue: 'item_1' }, { value: 'item 2', viewValue: 'item_2' }, { value: 'item 3', viewValue: 'item_3' }]
  sortby: { value: string, viewValue: string }[] = [{ value: 'item 1', viewValue: 'item_1' }, { value: 'item 2', viewValue: 'item_2' }, { value: 'item 3', viewValue: 'item_3' }]
  @Input() gameContentList: GameType[] = [
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-1.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-2.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-3.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-4.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-5.png' },
    // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/game-6.png' }

  ];
  selectedIndex: number = 0;
  searchTextForSearch: string;
  constructor(private cdRef: ChangeDetectorRef,
    public  gameService: GameService) {
    this.selectedItem = this.gameContentList[0];
  }

  ngOnInit(): void {
    this.gameService.getGameTabListItems().subscribe(res => {
      this.gameContentList = res;
      this.selectedItem = this.gameContentList[0];
      this.cdRef.detectChanges();
    });
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollLeft -= 150;
  }
  scrollRight() {
    this.scrollContainer.nativeElement.scrollLeft += 150;
  }

  setSearchTerm(searchTerm: string) {
    this.searchTextForSearch = searchTerm;
    this.cdRef.detectChanges();
  }
}
