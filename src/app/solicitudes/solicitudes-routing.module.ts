import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaSolicitudesComponent} from './consulta-solicitudes/consulta-solicitudes.component';



const routes: Routes = [
    {
        path: 'organigrama',
        component: ConsultaSolicitudesComponent,
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
export class SolicitudesRoutingModule { }
