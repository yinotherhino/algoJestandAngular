import { Component, Input } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-focus-forecasts',
  templateUrl: './focus-forecasts.component.html',
  styleUrls: ['./focus-forecasts.component.scss']
})
export class FocusForecastsComponent {
  @Input() forecasts: Weather[]=[];

}
