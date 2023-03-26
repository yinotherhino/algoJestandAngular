import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastsService } from '../services/forecasts.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-allforecasts',
  templateUrl: './allforecasts.component.html',
  styleUrls: ['./allforecasts.component.scss'],
})
export class AllforecastsComponent {
  forecasts: Weather[] = [];
  date: string | null = '2023-03-04';
  loads = "";
  loaderTimer: any;

  constructor(
    private forecastService: ForecastsService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loaderTimer = setInterval(() => {
      this.loads += ".";
      if (this.loads.length > 2) {
        this.loads = "";
      }
      this.cdr.detectChanges();
    },100)

    this.route.paramMap.subscribe((params) => {
      this.date = params.get('date');
      this.forecastService
        .getByDate(this.date || '2023-03-04')
        .subscribe((forecasts: Weather[]) => {
          this.forecasts = forecasts;
        });
    });

    this.cdr.detectChanges();
  }
  
  ngOnDestroy(): void {
    clearInterval(this.loaderTimer);
  }
}
