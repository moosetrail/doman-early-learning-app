import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule

    // LOCAL
  ],
  exports: [
    // VENDOR
    CommonModule,
    BrowserAnimationsModule

    // LOCAL
  ]
})
export class SharedModule { }
