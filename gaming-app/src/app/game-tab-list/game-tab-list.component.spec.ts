import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTabListComponent } from './game-tab-list.component';

describe('GameTabListComponent', () => {
  let component: GameTabListComponent;
  let fixture: ComponentFixture<GameTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTabListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
