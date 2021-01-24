import { MatCardModule } from '@angular/material/card';
import { ProgramsService } from './../../services/programs.service';
import { ChildService } from './../../../../shared/services/child.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AddProgramComponent } from './add-program.component';
import { mockProvider } from '@ngneat/spectator';

describe('AddProgramComponent', () => {
  let spectator: Spectator<AddProgramComponent>;
  const createComponent = createComponentFactory({
    component: AddProgramComponent,
    providers: [
      mockProvider(ChildService),
      mockProvider(ProgramsService),
    ],
    imports: [
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
