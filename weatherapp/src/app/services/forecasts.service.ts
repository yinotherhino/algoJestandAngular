import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Weather } from '../weather';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastsService {
  forecasts: Weather[] = []
  BASE_URL = environment.apiUrl;
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  private getCacheData(url: string): Observable<any> | void {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }
  }

  getAllForecasts(): Observable<Weather[]> {
    const url = `${this.BASE_URL}/`;
    const forecasts = this.getCacheData(url) || this.http.get(url) as Observable<Weather[]>;
    this.cache.set(url, forecasts);
    return forecasts;
  };


  getPopularForecasts(): Observable<Weather[]> {
    const url = `${this.BASE_URL}/popular`;
    const popularForecasts = this.getCacheData(url) || this.http.get(url) as Observable<Weather[]>;
    this.cache.set(url, popularForecasts);
    return popularForecasts;
  }

  getHottestForecasts(): Observable<Weather[]> {
    const url = `${this.BASE_URL}/hot`;
    const hotForecasts = this.getCacheData(url) || this.http.get(url) as Observable<Weather[]>;
    this.cache.set(url, hotForecasts);
    return hotForecasts;
  }

  getRainyForecasts(): Observable<Weather[]> {
    const url = `${this.BASE_URL}/rainy`;
    const rainyForecasts = this.getCacheData(url) || this.http.get(url) as Observable<Weather[]>;
    this.cache.set(url, rainyForecasts);
    return rainyForecasts;
  }

  getByDate(date: string): Observable<Weather[]> {
    const url = `${this.BASE_URL}/${date}`;
    const forecasts = this.getCacheData(url) || this.http.get(url) as Observable<Weather[]>;
    this.cache.set(url, forecasts);
    return forecasts;
  }
}
