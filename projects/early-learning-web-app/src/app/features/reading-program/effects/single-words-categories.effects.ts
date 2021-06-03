import { ReadingWord } from './../models/interfaces/reading-word';
import { ReadingCategory } from './../models/interfaces/reading-category';
import { ReadingCategoriesApiService } from './../services/reading-categories-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromSingleWordReadingProgramComponent from '../actions/single-word-reading-program-component.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as actions from '../actions/single-words-categories-effects.actions';
import { of } from 'rxjs';

@Injectable()
export class SingleWordsCategoriesEffects {
  loadCurrentCategories$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromSingleWordReadingProgramComponent.loadSingleWordReadingProgramComponents
        ),
        mergeMap((action) =>
          this.api.getCurrent(action.programId).pipe(
            map((categories) => {
              const wordCategories = categories.map(
                (dto) =>
                  ({
                    categoryName: dto.title,
                    cards: dto.cards.map((text) => ({ text })),
                  } as ReadingCategory<ReadingWord>)
              );

              return actions.loadSCurrentCategoriesFromApiSuccess({
                data: wordCategories,
              });
            }),
            catchError((error) =>
              of(actions.loadSCurrentCategoriesFromApiFailure({ error }))
            )
          )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private api: ReadingCategoriesApiService
  ) {}
}
