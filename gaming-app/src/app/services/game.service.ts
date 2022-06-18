import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { GameList, GameType, ImageItemList } from '../models/game-list.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  imagesPath = '../../assets/images/Main-Carousel/';
  val: GameType[] = [{ id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/1.png' }]
  gameTabList: BehaviorSubject<GameType[]> = new BehaviorSubject(this.val);

  constructor(private http: HttpClient) { }
  getGameListConfig(): Observable<GameList> {
    //
    const gameList: GameList = {
      slotGames: [{ index: 0, gameName: 'Game 1', jackpot: '1,031,567', time: '12:00' },
      { index: 1, gameName: 'Game 2', jackpot: '1,031,567', time: '1  2:00' },
      { index: 2, gameName: 'Game 3', jackpot: '1,031,567', time: '12:00' },
      { index: 3, gameName: 'Game 4', jackpot: '1,031,567', time: '12:00' },
      { index: 4, gameName: 'Game 5', jackpot: '1,031,567', time: '12:00' },
      { index: 5, gameName: 'Game 3', jackpot: '1,031,567', time: '12:00' }]
    }
    return of(gameList);
  }

  getImageList(): Observable<ImageItemList[]> {
    return of([
      {
        id: 1,
        name: 'All Game',
        image: this.imagesPath + '1.jpg'
      },
      {
        id: 2,
        name: 'Cards Game',
        image: this.imagesPath + '2.jpg'
      },
      {
        id: 3,
        name: 'Roulette Game',
        image: this.imagesPath + '3.jpg'
      }
    ]);
  }

  getGameResult(id: string): Observable<GameType[]> {
    const gameType: GameType[] = [{ id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/1.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/2.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/3.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/4.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/5.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/6.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/7.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/8.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/7.png' },
    { id: Math.random() * 100 + 1 + '', title: 'Title', iconUrl: '../../../assets/images/game-tab-list/8.png' }]
    return of(gameType);

  }

  getGameTabListItems(): Observable<GameType[]> {
    return this.gameTabList.asObservable();
  }
  setGameTabListItems(gameType: GameType[]){
    this.gameTabList.next(gameType);
  }
}
