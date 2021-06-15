import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SingleWordsCategoriesEffects } from './single-words-categories.effects';

describe('SingleWordsCategoriesEffects', () => {
  let actions$: Observable<any>;
  let effects: SingleWordsCategoriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SingleWordsCategoriesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SingleWordsCategoriesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
