import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ForecastsService } from '../services/forecasts.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-forecast-city',
  templateUrl: './forecast-city.component.html',
  styleUrls: ['./forecast-city.component.scss']
})
export class ForecastCityComponent {
  city: string = '';
  forecast: Weather | null = null;
  icon: any = null;
  constructor(private route: ActivatedRoute, private forecastService: ForecastsService, private cdr: ChangeDetectorRef,) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.city = params['city'];
    });
    this.forecastService.getAllForecasts().subscribe((forecasts: any) => {
      this.forecast = forecasts.find((forecast: any) => forecast.city === this.city);

      this.cdr.detectChanges();
    });
  }

}
