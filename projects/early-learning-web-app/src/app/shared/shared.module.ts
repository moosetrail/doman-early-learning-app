import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ListItemsPipe } from './pipes/list-items.pipe';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';

@NgModule({
  declarations: [ListItemsPipe, ChecklistItemComponent],
  imports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule

    // LOCAL
  ],
  exports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,

    // LOCAL
    ListItemsPipe,
    ChecklistItemComponent
  ]
})
export class SharedModule { }
