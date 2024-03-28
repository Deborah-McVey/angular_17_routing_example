import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'first-component',
        loadComponent: () => import('./first/first.component').then((c) => c.FirstComponent),
    },
    {
      path: 'second-component',
      loadComponent: () => import('./second/second.component').then((c) => c.SecondComponent)
    }
];
