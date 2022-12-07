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
import {OrganigramaComponent} from './organigrama/organigrama.component';
import {PuestosRoutingModule} from './puestos-routing.module';
import { VacantesComponent } from './vacantes/vacantes.component';
import { ContratacionesComponent } from './contrataciones/contrataciones.component';

/* Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
];

@NgModule({
  imports: [
    SharedModule,
    PuestosRoutingModule,
    ...antdModule,
    NzSwitchModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    OrgChartModule
  ],
  exports: [],
  declarations: [
    OrganigramaComponent,
    VacantesComponent,
    ContratacionesComponent
  ]
})
export class PuestosModule {
}
