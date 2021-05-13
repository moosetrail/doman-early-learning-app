import { ChooseProgramComponent } from './containers/choose-program/choose-program.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSingleWordsComponent } from './containers/plan-single-words/plan-single-words.component';

const routes: Routes = [
  {
    path: 'plan/choose-reading-program',
    component: ChooseProgramComponent
  },
  {
    path: 'plan/single-words',
    component: PlanSingleWordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingProgramRoutingModule { }
