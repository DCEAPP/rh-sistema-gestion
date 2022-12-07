import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogoCarrerasComponent} from './catalogo-carreras/catalogo-carreras.component';

const routes: Routes = [
    {
        path: 'catalogo-carreras',
        component: CatalogoCarrerasComponent,
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
export class MantenimientoRoutingModule { }
