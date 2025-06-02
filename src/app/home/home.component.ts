import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  // constructor(){}

  constructor(@Inject(PLATFORM_ID) private platformId: Object ,private route:Router) {}

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
images = [
    {
      src: 'assets/images/Full Circuit1.jpg',
      title: 'Full Circuit',
      desc: 'A vibrant depiction of a circuit board, symbolizing the intricate connections in technology.',

    },
    {
      src: 'assets/images/node mcu.jpg',
      title: 'Node MCU',
      desc: 'A detailed illustration of a Node MCU, showcasing its components and connections in a sleek design.',
    },
    {
      src: 'assets/images/noise consumer.jpg',
      title: 'Microphone',
      desc: 'A high-fidelity microphone capturing sound waves, representing the essence of audio technology.',
    },

    {
      src: 'assets/images/power supply.jpg',
      title: 'Power Supply Unit',
      desc: 'A robust power supply unit, illustrating the backbone of electronic systems with its intricate circuitry.',

    },

     {
      src: 'assets/images/DC-DC Booster.jpg',
      title: 'DC-DC Booster',
      desc: 'A compact DC-DC booster, illustrating the efficiency of power conversion in electronic circuits.',

    },
    {
      src: 'assets/images/Battery.jpg',
      title: 'Rechargeable Battery',
      desc: 'A sleek rechargeable battery, symbolizing the future of sustainable energy storage in modern devices.',


    },
     {
      src: 'assets/images/Motordrivermodule.jpg',
      title: 'Motor Driver Module',
      desc: 'A motor driver module, showcasing the control of motors in robotics and automation systems.',

    },
     {
      src: 'assets/images/Switch.jpg',
      title: 'Switch',
      desc: 'A versatile switch, representing the fundamental control mechanism in electronic devices.',

    },
    {
      src: 'assets/images/charging unit.jpg',
      title: 'Charging Unit',
      desc: 'A modern charging unit, symbolizing the convergence of technology and energy efficiency in everyday devices.',

    },
    {
      src: 'assets/images/Motor.jpg',
      title: 'Motor',
      desc: 'A dynamic motor, illustrating the power and movement in mechanical systems, essential for robotics and automation.',

    },
    {
      src: 'assets/images/piezoelectric transducer.jpg',
      title: 'Piezoelectric Transducer',
      desc: 'A piezoelectric transducer, converting mechanical stress into electrical signals, crucial for sensors and actuators.',

    },
  ];


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



  navigate(){
    this.route.navigate(['output'])
  }

}
