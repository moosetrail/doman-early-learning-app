import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ReadingProgramRoutingModule } from './reading-program-routing.module';
import { ReadingChecklistComponent } from './components/reading-checklist/reading-checklist.component';
import { PlanSingleWordsComponent } from './containers/plan-single-words/plan-single-words.component';
import { ReadingCategoryComponent } from './components/reading-category/reading-category.component';
import { ChooseProgramComponent } from './containers/choose-program/choose-program.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import * as fromReadingProgramState from './ReadingProgramState';

@NgModule({
  declarations: [
    ReadingChecklistComponent,
    PlanSingleWordsComponent,
    ReadingCategoryComponent,
    ChooseProgramComponent,
    EditCategoryComponent,
  ],
  imports: [
    SharedModule,
    ReadingProgramRoutingModule,
    DragDropModule,
    MatDialogModule,
    StoreModule.forFeature(
      fromReadingProgramState.readingProgramStateFeatureKey,
      fromReadingProgramState.reducers,
      { metaReducers: fromReadingProgramState.metaReducers }
    ),
  ],
  exports: [ReadingChecklistComponent],
})
export class ReadingProgramModule {}
