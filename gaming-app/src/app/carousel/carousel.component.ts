import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImageItemList } from '../models/game-list.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

  imagesPath = '../../assets/images/Main-Carousel/';
  private _config: CaroselConfig = {
    itemList: [
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
    ]
  };
  get config(): CaroselConfig {
    return this._config;
  }
  @Input()
  set config(value: CaroselConfig) {
    if (value && JSON.stringify(value) !== JSON.stringify(this._config)) {
      this._config = value;
      this.cdr.detectChanges();
    }
  }
  constructor(private ngbConfig: NgbCarouselConfig, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    // customize default values of carousels used by this component tree
    this.ngbConfig.interval = this.config.interval || 30000;
    this.ngbConfig.keyboard = this.config.keyboard || false;
    this.ngbConfig.pauseOnHover = this.config.pauseOnHover || false;

  }

}

export interface CaroselConfig {
  interval?: number;
  keyboard?: boolean;
  pauseOnHover?: boolean;
  itemList: ImageItemList[];
}

// `https://picsum.photos/id/${n}/900/500`)
// [700, 800, 807].map((n) => `../../assets/images/Main Carousel/${n}`);