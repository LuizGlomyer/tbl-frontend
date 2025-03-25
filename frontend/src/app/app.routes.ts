import { Routes } from '@angular/router';
import { LandingComponent } from './features/pages/landing/landing.component';
import { GamesComponent } from './features/pages/games/games.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full'},  
  { path: 'games', component: GamesComponent }, 
  { path: '**', component: NotFoundPageComponent },
];