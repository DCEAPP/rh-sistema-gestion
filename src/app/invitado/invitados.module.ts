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
import {SolicitudComponent} from './solicitud/solicitud.component';
import {ExamenConocimientoComponent} from './examen-conocimiento/examen-conocimiento.component';
import {ExamenInteligenciaComponent} from './examen-inteligencia/examen-inteligencia.component';
import {ExamenPsicometricoComponent} from './examen-psicometrico/examen-psicometrico.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzListModule} from 'ng-zorro-antd/list';
import {ReactiveFormsModule} from '@angular/forms';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzNoAnimationModule} from 'ng-zorro-antd/core/no-animation';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzRadioModule} from 'ng-zorro-antd/radio';

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
    NzUploadModule,
    NzDividerModule,
    NzTableModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzSelectModule,
    NzAvatarModule,
    NzCollapseModule,
    NzListModule,
    NzRateModule,
    NzNoAnimationModule,
    NzTreeSelectModule,
    NzUploadModule,
    NzMessageModule,
    NzRadioModule
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
