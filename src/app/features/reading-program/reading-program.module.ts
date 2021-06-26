import { ChildrenModule } from './../children/children.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ReadingProgramRoutingModule } from './reading-program-routing.module';
import { ReadingChecklistComponent } from './components/reading-checklist/reading-checklist.component';
import { ReadingCategoryComponent } from './components/reading-category/reading-category.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import * as fromReadingProgramState from './reading-program.state';
import { EffectsModule } from '@ngrx/effects';
import { LoadReadingProgramsEffects } from './effects/load-reading-programs.effects';
import { ChooseReadingProgramComponent } from './containers/choose-reading-program/choose-reading-program.component';
import { SingleWordReadingProgramComponent } from './containers/single-word-reading-program/single-word-reading-program.component';
import { PlanReadingProgramComponent } from './containers/plan-reading-program/plan-reading-program.component';
import { SingleWordsCategoriesEffects } from './effects/single-words-categories.effects';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CurrentCategoryListComponent } from './components/current-category-list/current-category-list.component';
import { PlannedCategoryListComponent } from './components/planned-category-list/planned-category-list.component';

@NgModule({
  declarations: [
    ReadingChecklistComponent,
    ReadingCategoryComponent,
    EditCategoryComponent,
    ChooseReadingProgramComponent,
    SingleWordReadingProgramComponent,
    PlanReadingProgramComponent,
    CategoryListComponent,
    CurrentCategoryListComponent,
    PlannedCategoryListComponent,
  ],
  imports: [
    SharedModule,
    ReadingProgramRoutingModule,
    ChildrenModule,
    DragDropModule,
    MatDialogModule,
    StoreModule.forFeature(
      fromReadingProgramState.readingProgramStateFeatureKey,
      fromReadingProgramState.reducers,
      { metaReducers: fromReadingProgramState.metaReducers }
    ),
    EffectsModule.forFeature([LoadReadingProgramsEffects, SingleWordsCategoriesEffects]),
  ],
  exports: [ReadingChecklistComponent],
})
export class ReadingProgramModule {}
