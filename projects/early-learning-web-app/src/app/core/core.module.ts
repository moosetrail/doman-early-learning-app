import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './containers/main-layout/main-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReadingProgramModule } from '../features/reading-program/reading-program.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // VENDOR
    BrowserModule,
    RouterModule,

    // MATERIAL
    MatToolbarModule,
    MatSidenavModule,

    // LOCAL
    SharedModule,
    ReadingProgramModule
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
