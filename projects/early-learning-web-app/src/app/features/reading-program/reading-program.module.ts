import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ReadingProgramRoutingModule } from './reading-program-routing.module';
import { ReadingChecklistComponent } from './components/reading-checklist/reading-checklist.component';
import { PlanSingleWordsComponent } from './containers/plan-single-words/plan-single-words.component';
import { ReadingCategoryComponent } from './components/reading-category/reading-category.component';

@NgModule({
  declarations: [ReadingChecklistComponent, PlanSingleWordsComponent, ReadingCategoryComponent],
  imports: [
    SharedModule,
    ReadingProgramRoutingModule
  ],
  exports: [ReadingChecklistComponent]
})
export class ReadingProgramModule { }
