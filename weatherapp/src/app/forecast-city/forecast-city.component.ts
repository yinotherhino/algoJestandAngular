import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastsService } from '../services/forecasts.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-forecast-city',
  templateUrl: './forecast-city.component.html',
  styleUrls: ['./forecast-city.component.scss'],
})
export class ForecastCityComponent {
  city: string | null = '';
  forecasts: Weather[] | [] = [];
  icon: any = null;
  loads = '';
  loaderTimer: any;

  constructor(
    private route: ActivatedRoute,
    private forecastService: ForecastsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loaderTimer = setInterval(() => {
      this.loads += '.';
      if (this.loads.length > 2) {
        this.loads = '';
      }
      this.cdr.detectChanges();
    }, 100);

    this.route.paramMap.subscribe((params) => {
      this.city = params.get('city');
      if (this.city !== null) {
        this.forecastService.getAllForecasts().subscribe((forecasts: any) => {
          this.forecasts = forecasts.filter(
            (forecast: any) => forecast.city === this.city
          );
          this.forecasts.sort(
            ({ date: date1 }: Weather, { date: date2 }: Weather) => {
              const d1 = new Date(date1).getTime();
              const d2 = new Date(date2).getTime();
              return d1 - d2;
            }
          );
          console.log(this.forecasts);
        });
      }
    });

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    clearInterval(this.loaderTimer);
  }
}
