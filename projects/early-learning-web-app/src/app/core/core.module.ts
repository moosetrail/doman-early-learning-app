import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './containers/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
