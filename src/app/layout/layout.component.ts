import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{







  constructor(private route:Router){}


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          offset: 0,
          duration: 800,
          once: true
        });
      });
    }

    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        Aos.refresh();  // Refresh AOS on every route change
      }
    });
  }




  navigate(){
    this.route.navigate(['output'])
  }


  navigateHome(){
    this.route.navigate(['home'])
  }


  navigateDetails(){
    this.route.navigate(['details'])
  }

  // hamburg() {
  //   const navbar = document.querySelector(".dropdown") as HTMLElement;
  //   navbar.style.transform = "translateY(0px)";
  // }

  // cancel() {
  //   const navbar = document.querySelector(".dropdown") as HTMLElement;
  //   navbar.style.transform = "translateY(-500px)";
  // }
  hamburg() {
    const navbar = document.querySelector(".dropdown") as HTMLElement;
    navbar.style.transform = "translateY(0)";
  }

  cancel() {
    const navbar = document.querySelector(".dropdown") as HTMLElement;
    navbar.style.transform = "translateY(-500px)";
  }


}

