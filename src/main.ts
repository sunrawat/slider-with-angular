import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  template: `
    <app-slider />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
