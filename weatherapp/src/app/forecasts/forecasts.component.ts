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
  popularForecasts: Weather[] = []
  loads: string = "";
  loadTimer: any;

  constructor(private forecastService: ForecastsService, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.loadTimer = setInterval(() => {
      this.loads += ".";
      if (this.loads.length > 2) {
        this.loads = "";
      }
      this.cdr.detectChanges();
    }, 100);


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

  ngOnDestroy(): void {
    clearInterval(this.loadTimer);
  }

  onSeeAllCitiesClick() {
    this.router.navigate(['/allforecasts']);
  }


}
