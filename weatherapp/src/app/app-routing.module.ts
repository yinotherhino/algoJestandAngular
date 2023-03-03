import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllforecastsComponent } from './allforecasts/allforecasts.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ForecastCityComponent } from './forecast-city/forecast-city.component';

const routes: Routes = [
  { path: '', component: ForecastsComponent },
  { path:"allforecasts", component: AllforecastsComponent },
  { path: ':city', component: ForecastCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
