import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrganigramaComponent} from './organigrama/organigrama.component';
import {ContratacionesComponent} from "./contrataciones/contrataciones.component";
import {VacantesComponent} from "./vacantes/vacantes.component";


const routes: Routes = [
  {
    path: 'contrataciones',
    component: ContratacionesComponent,
    data: {
      title: 'Contrataciones',
      headerDisplay: 'none'
    }
  },
  {
    path: 'organigrama',
    component: OrganigramaComponent,
    data: {
      title: 'Organigrama',
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
export class PuestosRoutingModule {
}
