import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCloud,
  faSmog,
  faCloudRain,
  faTemperatureFull,
  faTemperatureQuarter,
  faTemperatureThreeQuarters,
  IconDefinition,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { Weather } from '../weather';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() weather: Weather | null = null;
  weatherIcon: IconDefinition | null = null;
  constructor(private router: Router) {}
  goToCity(city: string) {
    console.log(city);
    this.router.navigate([city]);
  }

  cloud = faCloud;
  fog = faSmog;
  lowTemp = faTemperatureQuarter;
  midTemp = faTemperatureThreeQuarters;
  highTemp = faTemperatureFull;
  rain = faCloudRain;
  sun = faSun;

  ngOnInit(): void {
    if (this.weather !== null) {
      this.weatherIcon =
        this.weather.summary.toLocaleLowerCase() === 'rainy'
          ? this.rain
          : this.weather.summary.toLocaleLowerCase() === 'sunny'
          ? this.sun
          : this.weather.summary.toLocaleLowerCase() === 'cloudy'
          ? this.cloud
          : this.weather.summary.toLocaleLowerCase() === 'foggy'
          ? this.fog
          : this.sun;
    }
  }
}
