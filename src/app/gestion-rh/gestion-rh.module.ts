import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';


/** Import any ng-zorro components as the module required except icon module */
import {NzButtonModule} from 'ng-zorro-antd/button';
import {PruebaComponent} from './prueba/prueba.component';
import {GestionRhRoutingModule} from './gestion-rh-routing.module';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
];

@NgModule({
  imports: [
    SharedModule,
    GestionRhRoutingModule,
    ...antdModule
  ],
  exports: [],
  declarations: [
    PruebaComponent
  ]
})
export class GestionRhModule {
}
