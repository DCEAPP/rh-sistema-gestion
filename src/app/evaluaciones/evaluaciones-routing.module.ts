import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaEvaluacionesComponent} from './consulta-evaluaciones/consulta-evaluaciones.component';



const routes: Routes = [
    {
        path: 'organigrama',
        component: ConsultaEvaluacionesComponent,
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
export class EvaluacionesRoutingModule { }
