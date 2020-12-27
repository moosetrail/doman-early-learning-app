import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
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
    MatButtonModule,
    MatIconModule,
    MatListModule

    // LOCAL
  ]
})
export class SharedModule { }
