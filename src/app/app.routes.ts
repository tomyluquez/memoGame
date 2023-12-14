import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/selectlength/selectlength.component').then(
        (c) => c.SelectlengthComponent
      ),
  },
  {
    path: 'memotest/:id',
    loadComponent: () =>
      import('../app/pages/memotest/memotest.component').then(
        (c) => c.MemotestComponent
      ),
  },
];
