import { ChangeDetectorRef, Component } from '@angular/core';
import { Weather } from '../weather';
import { ForecastsService } from '../services/forecasts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.scss']
})
export class ForecastsComponent {
  rainForecasts: Weather[] = [];
  hottestForecasts: Weather[] = [];
  popularForecasts: Weather[] = [];
  private cache = new Map<string, any>();

  constructor(private forecastService: ForecastsService, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {

    this.forecastService.getRainyForecasts().subscribe((rainForecasts: Weather[]) => {
      this.rainForecasts = rainForecasts;
    });

    this.forecastService.getHottestForecasts().subscribe((hottestForecasts: Weather[]) => {
      this.hottestForecasts = hottestForecasts;
    });
    this.forecastService.getPopularForecasts().subscribe((popularForecasts: Weather[]) => {
      this.popularForecasts = popularForecasts;
    });
    this.cdr.detectChanges();
  }

  onSeeAllCitiesClick() {
    this.router.navigate(['/allforecasts']);
  }


}
