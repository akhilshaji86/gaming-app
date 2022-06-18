import { Component, Input, OnInit } from '@angular/core';
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
  @Input() config: CaroselConfig = {
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
  }
  constructor(private ngbConfig: NgbCarouselConfig) {

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