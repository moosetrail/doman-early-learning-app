import { ReadingProgramApiService } from './../services/reading-program-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromChooseReadingProgramComponent from '../actions/choose-reading-program-component.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from '../actions/load-reading-programs-effects.actions';
import { of } from 'rxjs';

@Injectable()
export class LoadReadingProgramsEffects {
  loadReadingPrograms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromChooseReadingProgramComponent.loadSingleWordsPrograms),
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
    private api: ReadingProgramApiService
  ) {}
}
