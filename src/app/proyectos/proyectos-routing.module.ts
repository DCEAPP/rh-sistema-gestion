import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaProyectosComponent} from './consulta-proyectos/consulta-proyectos.component';



const routes: Routes = [
    {
        path: 'organigrama',
        component: ConsultaProyectosComponent,
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
export class ProyectosRoutingModule { }
