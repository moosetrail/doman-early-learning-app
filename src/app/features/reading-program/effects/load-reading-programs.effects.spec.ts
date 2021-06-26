import { SpectatorService, createServiceFactory, mockProvider } from '@ngneat/spectator';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ReadingProgramApiService } from '../services/reading-program-api.service';

import { LoadReadingProgramsEffects } from './load-reading-programs.effects';

describe('LoadReadingProgramsEffects', () => {
  let actions$: Observable<Action>;
  let spectator: SpectatorService<LoadReadingProgramsEffects>;
  let scheduler: TestScheduler;
  let sut: LoadReadingProgramsEffects;
  let store: MockStore;

  const createService = createServiceFactory({
    service: LoadReadingProgramsEffects,
    providers: [provideMockActions(() => actions$), provideMockStore(), mockProvider(ReadingProgramApiService)],
  });

  beforeEach(() => {
    spectator = createService();
    sut = spectator.service;
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    store = spectator.inject(MockStore);
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
