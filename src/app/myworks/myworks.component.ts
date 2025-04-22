import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Autoplay]);
@Component({
  selector: 'app-myworks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './myworks.component.html',
  styleUrl: './myworks.component.scss'
})
export class MyworksComponent implements AfterViewInit {
  images = [
    {
      src: 'https://pagedone.io/asset/uploads/1712568734.png',
      title: 'Golden&Sliver Metal Belt Watch',
      desc: 'a chic and understated accessory for any occasion.',
    },
    {
      src: 'https://pagedone.io/asset/uploads/1712569721.png',
      title: 'Golden Metal Belt Watch',
      desc: 'a chic and understated accessory for any occasion.',
    },
    {
      src: 'https://pagedone.io/asset/uploads/1712568744.png',
      title: 'Sliver Metal Belt Watch',
      desc: 'a chic and understated accessory for any occasion.',
    },
    {
      src: 'https://pagedone.io/asset/uploads/1712568744.png',
      title: 'Sliver Metal Belt Watch',
      desc: 'a chic and understated accessory for any occasion.',
    },
    {
      src: 'https://pagedone.io/asset/uploads/1712568744.png',
      title: 'Sliver Metal Belt Watch',
      desc: 'a chic and understated accessory for any occasion.',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.gallery-top', {
        spaceBetween: 20,
        slidesPerView: 3,
        parallax: true,
        centeredSlides: true,
        loop: true,
        autoplay: { delay: 3000 },
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1920: { slidesPerView: 3, spaceBetween: 20 },
          1400: { slidesPerView: 3, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 15 },
          200: { slidesPerView: 2, spaceBetween: 15 },
        },
      });
    }
  }
}
