import { Component } from '@angular/core';
import { ForecastsService } from '../services/forecasts.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-allforecasts',
  templateUrl: './allforecasts.component.html',
  styleUrls: ['./allforecasts.component.scss']
})
export class AllforecastsComponent {
  forecasts: Weather[] = [];
  constructor(private forecastService: ForecastsService) { }

  ngOnInit(): void {
    this.forecastService.getAllForecasts().subscribe((forecasts: Weather[]) => {
      this.forecasts = forecasts;
    });
  };

}
