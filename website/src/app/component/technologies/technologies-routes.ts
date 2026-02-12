import {Routes} from '@angular/router';

export const HERO_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import('./technologies').then(c => c.Technologies)
  },

]
