import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogoCarrerasComponent} from './catalogo-carreras/catalogo-carreras.component';
import {CatalogoHabilidadesComponent} from './catalogo-habilidades/catalogo-habilidades.component';

const routes: Routes = [
  {
    path: 'catalogo-carreras',
    component: CatalogoCarrerasComponent,
    data: {
      title: 'Catalogo Carreras',
      headerDisplay: 'none'
    }
  },
  {
    path: 'catalogo-habilidades',
    component: CatalogoHabilidadesComponent,
    data: {
      title: 'Catalogo Habilidades',
      headerDisplay: 'none'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoRoutingModule {
}
