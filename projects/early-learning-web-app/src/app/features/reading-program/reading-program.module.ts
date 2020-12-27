import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ReadingProgramRoutingModule } from './reading-program-routing.module';
import { ReadingChecklistComponent } from './components/reading-checklist/reading-checklist.component';

@NgModule({
  declarations: [ReadingChecklistComponent],
  imports: [
    SharedModule,
    ReadingProgramRoutingModule
  ],
  exports: [ReadingChecklistComponent]
})
export class ReadingProgramModule { }
