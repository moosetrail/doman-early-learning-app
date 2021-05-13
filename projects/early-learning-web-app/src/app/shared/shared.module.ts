import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListItemsPipe } from './pipes/list-items.pipe';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';
import { ListChildrenPipe } from './pipes/list-children.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromSharedState from './SharedState';

@NgModule({
  declarations: [ListItemsPipe, ChecklistItemComponent, ListChildrenPipe],
  providers: [ListItemsPipe],
  imports: [
    // VENDOR
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,
    StoreModule.forFeature(
      fromSharedState.sharedStateFeatureKey,
      fromSharedState.reducers,
      { metaReducers: fromSharedState.metaReducers }
    ),

    // LOCAL
  ],
  exports: [
    // VENDOR
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,

    // LOCAL
    ListChildrenPipe,
    ListItemsPipe,
    ChecklistItemComponent,
  ],
})
export class SharedModule {}
