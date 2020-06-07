import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { paranayamaRoutes } from './pranayama/pranayama.routes';
import { homeRoute } from './home/home.route';
import { meditationRoutes } from './meditation/meditation.routes';

const routes: Routes = [
  homeRoute,
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  ...paranayamaRoutes,
  ...meditationRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
