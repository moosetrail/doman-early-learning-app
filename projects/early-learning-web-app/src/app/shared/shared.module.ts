import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule

    // LOCAL
  ],
  exports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule

    // LOCAL
  ]
})
export class SharedModule { }
