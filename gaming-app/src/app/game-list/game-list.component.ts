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
  selectedRow: { index: number, gameName: string, jackpot: string, time: string } = {
    index: 0,
    gameName: '',
    jackpot: '',
    time: ''
  };
  gamesList: MatTableDataSource<{ index: number, gameName: string, jackpot: string, time: string }> = new MatTableDataSource([
    { index: 0, gameName: 'Game 1', jackpot: '1,031,567', time: '12:00' },
    { index: 1, gameName: 'Game 2', jackpot: '1,031,567', time: '1  2:00' },
    { index: 2, gameName: 'Game 3', jackpot: '1,031,567', time: '12:00' },
    { index: 3, gameName: 'Game 4', jackpot: '1,031,567', time: '12:00' },
    { index: 4, gameName: 'Game 5', jackpot: '1,031,567', time: '12:00' },
    { index: 5, gameName: 'Game 3', jackpot: '1,031,567', time: '12:00' }
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
