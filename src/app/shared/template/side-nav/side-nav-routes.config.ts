import {SideNavInterface} from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
  {
    path: '',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: []
  },
  {
    path: '',
    title: 'Gestion RH',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/gestion-rh/prueba',
        title: 'Nivel 1',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '',
        title: 'Nivel 2',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: [
          {
            path: '',
            title: 'Nivel 3',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: '',
            submenu: []
          }
        ]
      }
    ]
  }
];
