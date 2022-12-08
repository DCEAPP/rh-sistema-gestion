import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SolicitudComponent} from './solicitud/solicitud.component';
import {ExamenConocimientoComponent} from './examen-conocimiento/examen-conocimiento.component';
import {ExamenInteligenciaComponent} from './examen-inteligencia/examen-inteligencia.component';
import {ExamenPsicometricoComponent} from './examen-psicometrico/examen-psicometrico.component';
import {VacantesComponent} from './vacantes/vacantes.component';

const routes: Routes = [
  {
    path: 'examen-conocimiento',
    component: ExamenConocimientoComponent,
    data: {
      title: 'Examen Conocimienot',
      headerDisplay: 'none'
    }
  },
  {
    path: 'examen-inteligencia',
    component: ExamenInteligenciaComponent,
    data: {
      title: 'Examen Inteligencia',
      headerDisplay: 'none'
    }
  },
  {
    path: 'examen-psicometrico',
    component: ExamenPsicometricoComponent,
    data: {
      title: 'Examen Psicomentrico',
      headerDisplay: 'none'
    }
  },
  {
    path: 'solicitud',
    component: SolicitudComponent,
    data: {
      title: 'Solicitud',
      headerDisplay: 'none'
    }
  },
  {
    path: 'vacantes',
    component: VacantesComponent,
    data: {
      title: 'Vacantes',
      headerDisplay: 'none'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitadosRoutingModule {
}
