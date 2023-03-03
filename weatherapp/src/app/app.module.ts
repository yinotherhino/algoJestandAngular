import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { AllforecastsComponent } from './allforecasts/allforecasts.component';
import { StoreModule } from '@ngrx/store';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { ForecastCityComponent } from './forecast-city/forecast-city.component';
import { FocusForecastsComponent } from './focus-forecasts/focus-forecasts.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastsComponent,
    NavbarComponent,
    CardComponent,
    ButtonComponent,
    AllforecastsComponent,
    ForecastCityComponent,
    FocusForecastsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
