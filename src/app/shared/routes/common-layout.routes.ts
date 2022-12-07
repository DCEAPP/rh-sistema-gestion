import {Routes} from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'invitado',
    data: {
      title: 'Invitado'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../invitado/invitados.module').then(m => m.InvitadosModule)
      },
    ]
  },
  {
    path: 'puestos',
    data: {
      title: 'Puestos'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../puestos/puestos.module').then(m => m.PuestosModule)
      },
    ]
  },
  {
    path: 'proyectos',
    data: {
      title: 'Proyectos'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../proyectos/proyectos.module').then(m => m.ProyectosModule)
      },
    ]
  },
  {
    path: 'solicitudes',
    data: {
      title: 'Solicitudes'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
      },
    ]
  },
  {
    path: 'evaluaciones',
    data: {
      title: 'Evaluaciones'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../evaluaciones/evaluaciones.module').then(m => m.EvaluacionesModule)
      },
    ]
  },
  {
    path: 'mantenimiento',
    data: {
      title: 'Mantenimiento'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../mantenimiento/mantenimiento.module').then(m => m.MantenimientoModule)
      },
    ]
  },
];
