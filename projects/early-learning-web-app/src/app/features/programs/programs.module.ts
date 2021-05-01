import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProgramsRoutingModule } from './programs-routing.module';
import { AddProgramComponent } from './containers/add-program/add-program.component';
import { AddChildComponent } from './containers/add-child/add-child.component';

@NgModule({
  declarations: [AddProgramComponent, AddChildComponent],
  imports: [
    SharedModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
