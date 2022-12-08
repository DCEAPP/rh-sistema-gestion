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
      title: 'Organigrama',
      headerDisplay: 'none'
    }
  },
  {
    path: 'examen-inteligencia',
    component: ExamenInteligenciaComponent,
    data: {
      title: 'Organigrama',
      headerDisplay: 'none'
    }
  },
  {
    path: 'examen-psicometrico',
    component: ExamenPsicometricoComponent,
    data: {
      title: 'Organigrama',
      headerDisplay: 'none'
    }
  },
  {
    path: 'solicitud',
    component: SolicitudComponent,
    data: {
      title: 'Organigrama',
      headerDisplay: 'none'
    }
  },
  {
    path: 'vacantes',
    component: VacantesComponent,
    data: {
      title: 'Organigrama',
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
