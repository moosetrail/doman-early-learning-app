import { AddChildComponent } from './../add-child/add-child.component';
import { MockComponent } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { ProgramsService } from './../../services/programs.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AddProgramComponent } from './add-program.component';
import { mockProvider } from '@ngneat/spectator';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('AddProgramComponent', () => {
  let spectator: Spectator<AddProgramComponent>;
  const createComponent = createComponentFactory({
    component: AddProgramComponent,
    declarations: [MockComponent(AddChildComponent)],
    providers: [
      mockProvider(ProgramsService, {getAllProgramTypes: () => of([])}),
    ],
    imports: [
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
