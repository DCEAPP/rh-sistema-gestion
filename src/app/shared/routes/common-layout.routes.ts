import {Routes} from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'gestion-rh',
    data: {
      title: 'Gestion RH'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../gestion-rh/gestion-rh.module').then(m => m.GestionRhModule)
      },
    ]
  },
];
