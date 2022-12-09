import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NgChartjsModule} from "ng-chartjs";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzTimelineModule} from "ng-zorro-antd/timeline";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzCodeBoxModule} from "../shared/components/codebox/codebox.module";

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
]

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    ...antdModule,
    NzCardModule,
    NzAvatarModule,
    NzRadioModule,
    NgChartjsModule,
    NzBadgeModule,
    NzTagModule,
    NzTableModule,
    NzProgressModule,
    NzDropDownModule,
    NzTimelineModule,
    NzTabsModule,
    NzCheckboxModule,
    NzCodeBoxModule
  ],
    exports: [],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
