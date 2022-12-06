import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PruebaComponent} from './prueba/prueba.component';


const routes: Routes = [
    {
        path: 'prueba',
        component: PruebaComponent,
        data: {
            title: 'Prueba',
            headerDisplay: 'none'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GestionRhRoutingModule { }
