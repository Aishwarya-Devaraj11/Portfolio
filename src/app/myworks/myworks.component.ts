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
      src: '../assets/ART/Art1.jpg',
      title: 'Slow and Steady',
      desc: 'An artistic tribute to perseverance, portrayed through a graceful tortoise.',
    },
    {
      src: '../assets/ART/Art2.jpg',
      title: 'Curious Encounter',
      desc: 'A playful scene where a cat’s wide-eyed wonder meets the gentle buzz of a bee.',
    },
    {
      src: '../assets/ART/Man3.jpg',
      title: 'Circle of Harmony',
      desc: 'An intricate mandala reflecting balance, beauty, and the endless rhythm of life.',
    },
    {
      src: '../assets/ART/Art8.jpg',
      title: 'The lock and key',
      desc: 'In a world of millions, you are the only key that fits my hearts lock.',
    },
    {
      src: '../assets/ART/Man2.jpg',
      title: 'Harmony Within',
      desc: 'A delicate balance of opposites, where light and dark, chaos and calm, dance together in perfect unity.',
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




  scrollToTarget() {
    const element = document.getElementById('next-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  scrollToTarget1() {
    const element = document.getElementById('next-Event');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  scrollToTarget2() {
    const element = document.getElementById('next-About');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



}
