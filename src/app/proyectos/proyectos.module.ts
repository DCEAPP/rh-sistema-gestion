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
import {ProyectosRoutingModule} from './proyectos-routing.module';
import {RegistroProyectosComponent} from './registro-proyectos/registro-proyectos.component';
import {ConsultaProyectosComponent} from './consulta-proyectos/consulta-proyectos.component';
import {NzMentionModule} from "ng-zorro-antd/mention";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTabsModule} from "ng-zorro-antd/tabs";




/* Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
];

@NgModule({
  imports: [
    SharedModule,
    ProyectosRoutingModule,
    ...antdModule,
    NzSwitchModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    OrgChartModule,
    NzMentionModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzSelectModule,
    NzTabsModule
  ],
  exports: [],
  declarations: [
    RegistroProyectosComponent,
    ConsultaProyectosComponent
  ]
})
export class ProyectosModule {
}
