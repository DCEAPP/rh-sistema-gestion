import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaEvaluacionesComponent} from './consulta-evaluaciones/consulta-evaluaciones.component';



const routes: Routes = [
    {
        path: 'evaluaciones',
        component: ConsultaEvaluacionesComponent,
        data: {
            title: 'Evaluaciones',
            headerDisplay: 'none'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EvaluacionesRoutingModule { }
