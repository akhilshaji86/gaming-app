import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CaroselConfig } from '../carousel/carousel.component';
import { SlotGame } from '../models/game-list.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  displayedColumns: string[] = [
    'slotGames',
    'jackpot',
    'time'
  ];
  private _selectedRow: SlotGame;
  set selectedRow(val: SlotGame) {
    if (val) {
      this._selectedRow = val;
      this.getGameResult(this.selectedRow);
    }
  }
  get selectedRow(): SlotGame {
    return this._selectedRow;
  }
  // {
  //   index: 0,
  //   gameName: '',
  //   jackpot: '',
  //   time: '',
  // gameTypeList: [{ id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/1.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/2.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/3.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/4.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/6.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/7.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/8.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/7.png' },
  // { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/8.png' }]
  // };


  gamesList: MatTableDataSource<SlotGame> = new MatTableDataSource();
  imagesPath = '../../assets/images/Main-Carousel/';
  gameConfig: CaroselConfig = {
    itemList: []
  }
  //{
  //   itemList: [
  //     {
  //       id: 1,
  //       name: 'All Game',
  //       image: this.imagesPath + '1.jpg'
  //     },
  //     {
  //       id: 2,
  //       name: 'Cards Game',
  //       image: this.imagesPath + '2.jpg'
  //     },
  //     {
  //       id: 3,
  //       name: 'Roulette Game',
  //       image: this.imagesPath + '3.jpg'
  //     }
  //   ]
  // };
  constructor(public  gameService: GameService) {
    // this.gameConfig.itemList = data.imageList;

  }

  ngOnInit(): void {
    this.gameService.getGameListConfig().subscribe(data => {
      // this.gameConfig.itemList = data.imageList;
      this.gamesList.data = data.slotGames;
      this.selectedRow = data.slotGames[0];
    });

    this.gameService.getImageList().subscribe(data => {
      this.gameConfig.itemList = data;
    });
  }

  getGameResult(game: SlotGame) {
    this.gameService.getGameResult(game.index + '').subscribe((data) => {
      this.gameService.setGameTabListItems(data);
    })
  }
}
