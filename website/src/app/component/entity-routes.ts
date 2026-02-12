import {Routes} from '@angular/router';

export const ENTITY_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./hero-page/hero-page-routes').then(r => r.HERO_ROUTES)
  }
]
