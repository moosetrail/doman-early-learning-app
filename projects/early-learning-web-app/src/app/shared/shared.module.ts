import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { ListItemsPipe } from './pipes/list-items.pipe';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';

@NgModule({
  declarations: [ListItemsPipe, ChecklistItemComponent],
  imports: [
    // VENDOR
    CommonModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule

    // LOCAL
  ],
  exports: [
    // VENDOR
    CommonModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,

    // LOCAL
    ListItemsPipe,
    ChecklistItemComponent
  ]
})
export class SharedModule { }
