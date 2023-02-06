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
  scale = 1;
  scaleMax = 1;
  scaleMin = 1;
  scaleIncreement = 0.1;
  selectedIndex = '';
  jump = 1;
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

  svgClicked(e: any) {
    console.log(e.target.id);
    this.regionSelected(e.target.id);
  }
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
  selected(title: string) {
    console.log(title);

    let index: any = null;
    this.data.find((r, i) => {
      if (r.title == title) {
        index = i;
      }
    });
    const index2 = this.selectedList.find((r, i) => r.title == title);
    if (!index2) {
      this.currentIndex = index;
      this.selectedList = this.data.slice(index, this.currentIndex + 3);
    }
  }
  regionSelected(id: string) {
    this.selectedIndex = id;
    this.selected(this.selectedIndex);
  }
}
