import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  gamesList: MatTableDataSource<{ gameName: string, jackpot: string, time: string }> = new MatTableDataSource([
    { gameName: 'Game 1', jackpot: '1,031,567', time: '12:00' },
    { gameName: 'Game 2', jackpot: '1,031,567', time: '1  2:00' },
    { gameName: 'Game 2', jackpot: '1,031,567', time: '12:00' },
    { gameName: 'Game 2', jackpot: '1,031,567', time: '12:00' },
    { gameName: 'Game 2', jackpot: '1,031,567', time: '12:00' },
    { gameName: 'Game 3', jackpot: '1,031,567', time: '12:00' }
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
