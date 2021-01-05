import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReadingProgramModule } from '../reading-program/reading-program.module';
import { DefaultHomePageComponent } from './containers/default-home-page/default-home-page.component';



@NgModule({
  declarations: [DefaultHomePageComponent],
  imports: [
    SharedModule,
    ReadingProgramModule
  ]
})
export class HomePageModule { }
