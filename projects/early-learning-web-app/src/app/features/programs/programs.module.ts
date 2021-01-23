import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProgramsRoutingModule } from './programs-routing.module';
import { AddProgramComponent } from './containers/add-program/add-program.component';

@NgModule({
  declarations: [AddProgramComponent],
  imports: [
    SharedModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
