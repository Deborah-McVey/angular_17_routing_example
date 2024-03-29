import { ResolveFn, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'first-component',
        title: 'First component',
        loadComponent: () => import('./first/first.component').then((c) => c.FirstComponent),
        children: [
          {
            path: 'child-a',
            title: 'child-a',
            loadComponent: () => import('./child-a/child-a.component').then((c) => c.ChildAComponent)
          },
          {
            path: 'child-b',
            title: 'child-b',
            loadComponent: () => import('./child-b/child-b.component').then((c) => c.ChildBComponent)
          },
        ],
    },
    {
      path: 'second-component',
      title: 'Second component',
      loadComponent: () => import('./second/second.component').then((c) => c.SecondComponent)
    },
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
];
