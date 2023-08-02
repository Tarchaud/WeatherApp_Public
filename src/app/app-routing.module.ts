import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component';

const routes: Routes = [
  { path: 'widget', component: WeatherCardComponent },
  {path: '**', redirectTo: '/widget'},
  { path: '', redirectTo: '/widget', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
