import { ChildrenApiService } from './../services/children-api.service';
import { SpectatorService, createServiceFactory, mockProvider } from '@ngneat/spectator';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';
import { LoadChildrenEffects } from './load-children.effects';

describe('LoadChildrenEffects', () => {
  let actions$: Observable<Action>;
  let spectator: SpectatorService<LoadChildrenEffects>;
  let scheduler: TestScheduler;
  let sut: LoadChildrenEffects;
  let store: MockStore;

  const createService = createServiceFactory({
    service: LoadChildrenEffects,
    providers: [provideMockActions(() => actions$), provideMockStore(), mockProvider(ChildrenApiService)],
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
