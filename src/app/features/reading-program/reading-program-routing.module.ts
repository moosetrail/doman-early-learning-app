import { SingleWordReadingProgramComponent } from './containers/single-word-reading-program/single-word-reading-program.component';
import { PlanReadingProgramComponent } from './containers/plan-reading-program/plan-reading-program.component';
import { ChooseReadingProgramComponent } from './containers/choose-reading-program/choose-reading-program.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'plan',
    component: PlanReadingProgramComponent,
    children: [
      {
        path: 'single-words',
        component: ChooseReadingProgramComponent
      },
      {
        path: 'single-words/:programId',
        component: SingleWordReadingProgramComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingProgramRoutingModule { }
