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

  constructor(
    private forecastService: ForecastsService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
}
