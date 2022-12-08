import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsultaProyectosComponent} from './consulta-proyectos/consulta-proyectos.component';
import {RegistroProyectosComponent} from './registro-proyectos/registro-proyectos.component';


const routes: Routes = [
  {
    path: 'consulta-proyectos',
    component: ConsultaProyectosComponent,
    data: {
      title: 'Organigrama',
      headerDisplay: 'none'
    }
  },
  {
    path: 'registro-proyectos',
    component: RegistroProyectosComponent,
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
export class ProyectosRoutingModule {
}
