import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import * as fromReadingPrograms from '../../selectors/reading-programs.selectors';
import * as fromStoreTest from './../../reading-program.state.test-helpers';

import { ChooseReadingProgramComponent } from './choose-reading-program.component';

describe('ChooseReadingProgramComponent', () => {
  let spectator: Spectator<ChooseReadingProgramComponent>;
  let sut: ChooseReadingProgramComponent;
  let store: MockStore;
  let initialState = {...fromStoreTest.initialReadingState}

  const createComponent = createComponentFactory({
    component: ChooseReadingProgramComponent,
    imports: [RouterTestingModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
    providers: [provideMockStore({initialState})],
  });

  beforeEach(() => {
    spectator = createComponent();
    sut = spectator.component;
    store = spectator.inject(MockStore);

    store.overrideSelector(fromReadingPrograms.allReadingPrograms, []);
    store.overrideSelector(fromReadingPrograms.isLoadingReadingPrograms, true);
    store.overrideSelector(fromReadingPrograms.haveLoadingError, false);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
