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
import {SolicitudesRoutingModule} from './solicitudes-routing.module';
import {ConsultaSolicitudesComponent} from './consulta-solicitudes/consulta-solicitudes.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzTabsModule} from "ng-zorro-antd/tabs";


/* Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
];

@NgModule({
  imports: [
    SharedModule,
    SolicitudesRoutingModule,
    ...antdModule,
    NzSwitchModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    OrgChartModule,
    NzModalModule,
    NzTabsModule
  ],
  exports: [],
  declarations: [
    ConsultaSolicitudesComponent
  ]
})
export class SolicitudesModule {
}
