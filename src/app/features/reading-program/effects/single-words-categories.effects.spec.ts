import {
  SpectatorService,
  createServiceFactory,
  mockProvider,
} from '@ngneat/spectator';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ReadingCategoriesApiService } from '../services/reading-categories-api.service';

import { SingleWordsCategoriesEffects } from './single-words-categories.effects';

describe('SingleWordsCategoriesEffects', () => {
  let actions$: Observable<Action>;
  let spectator: SpectatorService<SingleWordsCategoriesEffects>;
  let scheduler: TestScheduler;
  let sut: SingleWordsCategoriesEffects;
  let store: MockStore;

  const createService = createServiceFactory({
    service: SingleWordsCategoriesEffects,
    providers: [
      provideMockActions(() => actions$),
      provideMockStore(),
      mockProvider(ReadingCategoriesApiService),
    ],
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
