import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';



@NgModule({
  declarations: [PageNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNavigationComponent]
})
export class LayoutModule { }
