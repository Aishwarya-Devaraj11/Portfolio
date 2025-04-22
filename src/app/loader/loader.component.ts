import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {



  isLoading: boolean = true;
  progress: number = 0;

  ngOnInit(): void {
    this.startLoader();
  }

  startLoader(): void {
    const interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.isLoading = false; // Hide loader when progress reaches 100%
      }
    }, 5); // Adjust the interval speed as needed
  }
}
