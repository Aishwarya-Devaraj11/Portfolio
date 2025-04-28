import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from "../animation/animation.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule, AnimationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isSidebarOpen = false;


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  skills = [
    { name: 'HTML', percentage: 90, color: '#ef4444' },
    { name: 'CSS', percentage: 85, color: '#3b82f6' },
    { name: 'Angular', percentage: 75, color: '#f97316' },
    { name: 'Tailwind', percentage: 80, color: '#22c55e' },
  ];

  circumference = 2 * Math.PI * 50;


  scrollToTarget() {
    const element = document.getElementById('next-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }




}
