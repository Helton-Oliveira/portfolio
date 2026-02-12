import {Routes} from '@angular/router';

export const HERO_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import('./about-me').then(c => c.AboutMe)
  },

]
