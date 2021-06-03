import { ReadingProgramApiService } from './../services/reading-program-api.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as fromChooseReadingProgramComponent from '../actions/choose-reading-program-component.actions';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import * as actions from '../actions/load-reading-programs-effects.actions';
import * as fromSingleWordReadingProgramComponent from './../actions/single-word-reading-program-component.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromReadingPrograms from './../selectors/reading-programs.selectors';

@Injectable()
export class LoadReadingProgramsEffects {
  loadReadingPrograms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromChooseReadingProgramComponent.loadSingleWordsPrograms,
        fromSingleWordReadingProgramComponent.loadSingleWordReadingProgramComponents
      ),
      concatLatestFrom(() => this.store.select(fromReadingPrograms.allReadingPrograms)),
      filter(([, programs]) => programs.length === 0),
      mergeMap(() =>
        this.api.getAllReadingPrograms().pipe(
          map((programs) =>
            actions.loadReadingProgramsFromApiSuccess({ data: programs })
          ),
          catchError((error) =>
            of(actions.loadReadingProgramsFromApiFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private api: ReadingProgramApiService
  ) {}
}
