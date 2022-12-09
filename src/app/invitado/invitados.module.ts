import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';


/** Import any ng-zorro components as the module required except icon module */
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {OrgChartModule} from 'angular13-organization-chart';
import {VacantesComponent} from './vacantes/vacantes.component';
import {InvitadosRoutingModule} from './invitados-routing.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ExamenConocimientoComponent } from './examen-conocimiento/examen-conocimiento.component';
import { ExamenInteligenciaComponent } from './examen-inteligencia/examen-inteligencia.component';
import { ExamenPsicometricoComponent } from './examen-psicometrico/examen-psicometrico.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzStepsModule} from "ng-zorro-antd/steps";

/* Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
];

@NgModule({
    imports: [
        SharedModule,
        InvitadosRoutingModule,
        ...antdModule,
        NzSwitchModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule,
        NzGridModule,
        OrgChartModule,
        NzInputModule,
        NzDescriptionsModule,
        NzRadioModule,
        NzStepsModule
    ],
  exports: [],
  declarations: [
    VacantesComponent,
    SolicitudComponent,
    ExamenConocimientoComponent,
    ExamenInteligenciaComponent,
    ExamenPsicometricoComponent
  ]
})
export class InvitadosModule {
}
