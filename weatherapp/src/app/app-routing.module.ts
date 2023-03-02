import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllforecastsComponent } from './allforecasts/allforecasts.component';
import { ForecastsComponent } from './forecasts/forecasts.component';

const routes: Routes = [
  { path: '', component: ForecastsComponent },
  { path:"allforecasts", component: AllforecastsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
