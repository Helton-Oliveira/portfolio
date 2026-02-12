import {Routes} from '@angular/router';

export const HERO_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import('./hero-page').then(c => c.HeroPage)
  },

]
