import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('searchInput') myInput: ElementRef<HTMLInputElement> = {} as ElementRef<HTMLInputElement>;
  @Input() forecasts: any[] = [];
  constructor() { }
  results: any[] = [];

  searchSuggestions() {
    const searchValue = this.myInput.nativeElement.value;
    if (searchValue.length < 1) {
      this.results = [];
      return;
    }
    console.log(searchValue);
    this.results = this.forecasts.filter((forecast: any) => forecast.city.toLowerCase().includes(searchValue.toLowerCase())).map((forecast: any) => forecast.city);
  }

  date: Date = new Date();
  day: number = this.date.getDate();
  year: number = this.date.getFullYear();
  month: string = this.date.toLocaleString('default', { month: 'long' });
  weekday: string = this.date.toLocaleString('default', { weekday: 'long' });
  monthAndYear: string = `${this.month} ${this.year}`;
  fullDate: string = `${this.weekday}, ${this.month} ${this.day} , ${this.year}`;

  ngoninit(): void {
  }
}
