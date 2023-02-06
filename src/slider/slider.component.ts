import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports: [CommonModule],
})
export class SliderComponent {
  @ViewChild('map') map!: ElementRef;
  currentIndex = 0;
  selectedIndex = '';
  jump = 3; // change jump index accordingly
  data = [
    { title: 'SAU99' },
    { title: 'SAU1096' },
    { title: 'SAU1097' },
    { title: 'SAU1098' },
    { title: 'SAU845' },
    { title: 'SAU846' },
    { title: 'SAU847' },
    { title: 'SAU848' },
    { title: 'SAU861' },
    { title: 'SAU862' },
    { title: 'SAU885' },
    { title: 'SAU886' },
    { title: 'SAU887' },
    { title: 'SAU888' },
  ];
  selectedList = this.data.slice(0, 3);
  previous() {
    this.currentIndex = this.currentIndex - this.jump;
    this.selectedList = this.data.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
  }
  next() {
    this.currentIndex = this.currentIndex + this.jump;
    this.selectedList = this.data.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
  }

}
