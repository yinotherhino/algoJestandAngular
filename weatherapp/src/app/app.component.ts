import { Component } from '@angular/core';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  ngoOnInit(): void {
  }
  title: string = 'weatherapp';

}
