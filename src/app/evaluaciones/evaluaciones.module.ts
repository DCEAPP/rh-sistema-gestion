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
import {EvaluacionesRoutingModule} from "./evaluaciones-routing.module";
import { ConsultaEvaluacionesComponent } from './consulta-evaluaciones/consulta-evaluaciones.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";


/* Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
];

@NgModule({
    imports: [
        SharedModule,
        EvaluacionesRoutingModule,
        ...antdModule,
        NzSwitchModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule,
        NzGridModule,
        OrgChartModule,
        NzDropDownModule
    ],
  exports: [],
  declarations: [
    ConsultaEvaluacionesComponent
  ]
})
export class EvaluacionesModule {
}
