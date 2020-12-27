import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ListItemsPipe } from './pipes/list-items.pipe';

@NgModule({
  declarations: [ListItemsPipe],
  imports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // MATERIAL
    MatButtonModule,
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
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    // LOCAL
    ListItemsPipe
  ]
})
export class SharedModule { }
