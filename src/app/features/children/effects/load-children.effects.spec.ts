import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadChildrenEffects } from './load-children.effects';

describe('LoadChildrenEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadChildrenEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadChildrenEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoadChildrenEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
