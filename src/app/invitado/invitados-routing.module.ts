import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolicitudComponent} from './solicitud/solicitud.component';

const routes: Routes = [
    {
        path: 'organigrama',
        component: SolicitudComponent,
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
export class InvitadosRoutingModule { }
