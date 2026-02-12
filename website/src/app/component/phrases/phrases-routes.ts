import {Routes} from '@angular/router';

export const HERO_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import('./phrases').then(c => c.Phrases)
  },

]
