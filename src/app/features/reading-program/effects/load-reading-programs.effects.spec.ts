import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadReadingProgramsEffects } from './load-reading-programs.effects';

describe('LoadReadingProgramsEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadReadingProgramsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadReadingProgramsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoadReadingProgramsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
