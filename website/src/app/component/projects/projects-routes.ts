import {Routes} from '@angular/router';

export const HERO_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import('./projects').then(c => c.HeroPage)
  },

]
