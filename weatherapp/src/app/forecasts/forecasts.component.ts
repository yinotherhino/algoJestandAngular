import { ChangeDetectorRef, Component } from '@angular/core';
import { Weather } from '../weather';
import { ForecastsService } from '../services/forecasts.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.scss']
})
export class ForecastsComponent {
  rainForecasts: Weather[] = [];
  hottestForecasts: Weather[] = [];
  popularForecasts: Weather[] = [];

  constructor(private forecastService: ForecastsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.forecastService.getRainyForecasts().subscribe((rainForecasts: Weather[]) => {
      console.log(rainForecasts);
      this.rainForecasts = rainForecasts;
    });

    this.forecastService.getHottestForecasts().subscribe((hottestForecasts: Weather[]) => {
      console.log(hottestForecasts);
      this.hottestForecasts = hottestForecasts;
    });
    this.forecastService.getPopularForecasts().subscribe((popularForecasts: Weather[]) => {
      console.log(popularForecasts);
      this.popularForecasts = popularForecasts;
    });
    this.cdr.detectChanges();
  }


}
