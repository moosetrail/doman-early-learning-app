import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultHomePageComponent } from './features/home-page/containers/default-home-page/default-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultHomePageComponent
  },
  {
    path: 'reading-program',
    loadChildren: () =>
      import('./features/reading-program/reading-program.module').then(
        (m) => m.ReadingProgramModule
      ),
  },
  { path: 'programs', loadChildren: () => import('./features/programs/programs.module').then(m => m.ProgramsModule) },
  { path: 'children', loadChildren: () => import('./features/children/children.module').then(m => m.ChildrenModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
