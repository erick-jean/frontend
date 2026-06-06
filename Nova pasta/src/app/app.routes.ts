import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'orcamentos',
    loadComponent: () => import('./pages/orcamentos/orcamentos').then((c) => c.Orcamentos),
  },
];
