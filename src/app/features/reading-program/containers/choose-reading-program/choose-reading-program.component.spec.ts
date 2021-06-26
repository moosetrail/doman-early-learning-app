import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import * as fromReadingPrograms from '../../selectors/reading-programs.selectors';

import { ChooseReadingProgramComponent } from './choose-reading-program.component';

describe('ChooseReadingProgramComponent', () => {
  let spectator: Spectator<ChooseReadingProgramComponent>;
  let sut: ChooseReadingProgramComponent;
  let store: MockStore;

  const createComponent = createComponentFactory({
    component: ChooseReadingProgramComponent,
    imports: [RouterTestingModule],
    providers: [provideMockStore()],
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
