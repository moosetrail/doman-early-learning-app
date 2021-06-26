import { Store } from '@ngrx/store';
import { ReadingWord } from './../models/interfaces/reading-word';
import { ReadingCategory } from './../models/interfaces/reading-category';
import { ReadingCategoriesApiService } from './../services/reading-categories-api.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as fromSingleWordReadingProgramComponent from '../actions/single-word-reading-program-component.actions';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import * as actions from '../actions/single-words-categories-effects.actions';
import { of } from 'rxjs';
import { SingleWordReadingCategoryDto } from '../models/dtos/single-word-reading-category-dto';
import * as fromReadingCategories from '../selectors/reading-categories.selectors';

@Injectable()
export class SingleWordsCategoriesEffects {
  loadCurrentCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromSingleWordReadingProgramComponent.loadSingleWordReadingProgramComponents
      ),
      mergeMap((action) =>
        this.api.getCurrent(action.programId).pipe(
          map((categories) => {
            const wordCategories = categories.map((dto) =>
              this.mapSingleWordReadingCategoryDtoToReadingCategory(dto)
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

  loadFirstPlannedCategories = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromSingleWordReadingProgramComponent.loadSingleWordReadingProgramComponents
      ),
      mergeMap((action) =>
        this.api.getPlanned(action.programId, 10, 0).pipe(
          map((categories) => {
            const wordCategories = categories.map((dto) =>
              this.mapSingleWordReadingCategoryDtoToReadingCategory(dto)
            );

            return actions.loadPlannedCategoriesFromApiSuccess({
              data: wordCategories,
              limit: 10,
              offset: 0,
            });
          }),
          catchError((error) =>
            of(actions.loadSCurrentCategoriesFromApiFailure({ error }))
          )
        )
      )
    )
  );

  addNewCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.addNewCategory),
      mergeMap((action) =>
        this.api.addCategory(action.programId, action.name, action.words).pipe(
          map((dto) => {
            const category =
              this.mapSingleWordReadingCategoryDtoToReadingCategory(dto);
            return actions.addNewCategoriesToApiSuccess({ data: category });
          }),
          catchError((error) =>
            of(actions.addNewCategoriesToApiFailure({ error }))
          )
        )
      )
    )
  );

  movePlannedCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.moveCategory),
      filter(
        (action) =>
          action.fromList == 'planned' && action.fromList == action.toList
      ),
      concatLatestFrom((action) =>
        this.store.select(
          fromReadingCategories.plannedCategoryAtIndex(action.newIndex)
        )
      ),
      mergeMap(([action, category]) =>
        this.api
          .movePlanned(action.programId, category.id, action.newIndex)
          .pipe(
            map(() =>
              actions.movePlannedCategoryInApiSuccess({
                newIndex: action.newIndex,
                categoryId: category.id,
              })
            ),
            catchError((error) =>
              of(
                actions.movePlannedCategoryInApiFailure({
                  newIndex: action.newIndex,
                  categoryId: category.id,
                  error,
                })
              )
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private api: ReadingCategoriesApiService,
    private store: Store
  ) {}

  private mapSingleWordReadingCategoryDtoToReadingCategory(
    dto: SingleWordReadingCategoryDto
  ): ReadingCategory<ReadingWord> {
    return {
      id: dto.id,
      categoryName: dto.title,
      cards: dto.cards.map((text) => ({ text, textOnCard: text })),
    } as ReadingCategory<ReadingWord>;
  }
}
