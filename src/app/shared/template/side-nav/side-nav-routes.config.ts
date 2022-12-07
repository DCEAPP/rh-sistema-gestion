import {SideNavInterface} from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
  {
    path: '',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: [],
  },
  {
    path: '',
    title: 'Invitado',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/gestion-rh/invitado/vacantes',
        title: 'Vacantes',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/gestion-rh/invitado/solicitudes',
        title: 'Hacer Solicitud',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/gestion-rh/invitado/evaluacion/prueba-conocimiento',
        title: 'Prueba de Conocimiento',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/gestion-rh/invitado/evaluacion/prueba-inteligencia',
        title: 'Prueba de Inteligencia',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/gestion-rh/invitado/evaluacion/prueba-psicometrico',
        title: 'Prueba Psicometrica',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Puestos',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/puestos/organigrama',
        title: 'Organigrama',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/puestos/vacantes',
        title: 'Vacantes',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/puestos/contrataciones',
        title: 'Contrataciones',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Proyectos',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/gestion-rh/proyectos/registro-proyectos',
        title: 'Registro',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu: []
      },
      {
        path: '/gestion-rh/proyectos/consulta-proyectos',
        title: 'Consulta',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Solicitudes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/gestion-rh/solicitudes/consulta-solicitudes',
        title: 'Consulta',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Evaluaciones',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/gestion-rh/solicitudes/consulta-evaluacion',
        title: 'Consulta',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Mantenimiento',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/gestion-rh/mantenimiento/catalogo-carreras',
        title: 'Catalogo Carreras',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu: []
      },
      {
        path: '/gestion-rh/solicitudes/catalogo-habilidades',
        title: 'Catalogo Habilidades',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu: []
      }
    ]
  }
];
