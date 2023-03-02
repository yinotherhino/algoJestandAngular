import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Weather } from '../weather';
import { environment } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class ForecastsService {
  forecasts: Weather[] = []
  BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllForecasts(): Observable<Weather[]> {
    const forecasts = this.http.get(`${this.BASE_URL}/`) as Observable<Weather[]>;
    return forecasts;
  };


  getPopularForecasts(): Observable<Weather[]> {
    const popularForecasts = this.http.get(`${this.BASE_URL}/popular`) as Observable<Weather[]>;
    return popularForecasts;
  }

  getHottestForecasts(): Observable<Weather[]> {
    const hottestForecasts = this.http.get(`${this.BASE_URL}/hot`) as Observable<Weather[]>;
    return hottestForecasts;
  }

  getRainyForecasts(): Observable<Weather[]> {
    const rainyForecasts = this.http.get(`${this.BASE_URL}/rainy`) as Observable<Weather[]>;
    return rainyForecasts;
  }
}
