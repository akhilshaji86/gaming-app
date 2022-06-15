import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

  imagesPath = '../../assets/images/Main-Carousel/';
  images : any = [
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
  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000000;
    config.keyboard = true;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
  }

}


// `https://picsum.photos/id/${n}/900/500`)
// [700, 800, 807].map((n) => `../../assets/images/Main Carousel/${n}`);