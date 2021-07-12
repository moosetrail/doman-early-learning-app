import { ReadingStatusDTO } from './../models/dtos/reading-unit-status-dto';
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

  loadCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.loadCompletedCategories),
      mergeMap((action) =>
        this.api.getRetired(action.programId, 10, 0).pipe(
          map((result) =>
            actions.loadCompletedCategoriesFromApiSuccess({
              data: result.map((dto) =>
                this.mapSingleWordReadingCategoryDtoToReadingCategory(dto)
              ),
              limit: 10,
              offset: 0,
            })
          ),
          catchError((error) =>
            of(actions.loadCompletedCategoriesFromInApiFailure({ error }))
          )
        )
      )
    )
  );

  addNewCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.addNewCategory),
      concatLatestFrom((action) =>
        this.store.select(fromReadingCategories.categoryIdFromName(action.name))
      ),
      mergeMap(([action, tempId]) =>
        this.api.addCategory(action.programId, action.name, action.words).pipe(
          map((dto) => {
            const category =
              this.mapSingleWordReadingCategoryDtoToReadingCategory(dto);
            return actions.addNewCategoriesToApiSuccess({
              data: category,
              tempId,
            });
          }),
          catchError((error) =>
            of(actions.addNewCategoriesToApiFailure({ error, tempId }))
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

  moveToCurrent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.moveCategoryToCurrent),
      mergeMap((action) =>
        this.api
          .changeStatus(
            action.programId,
            action.categoryId,
            ReadingStatusDTO.active
          )
          .pipe(
            map(() =>
              actions.moveCategoryToCurrentInApiSuccess({
                categoryId: action.categoryId,
              })
            ),
            catchError((error) =>
              of(
                actions.moveCategoryToCurrentInInApiFailure({
                  error,
                  categoryId: action.categoryId,
                })
              )
            )
          )
      )
    )
  );

  moveToCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.moveCategoryToCompleted),
      mergeMap((action) =>
        this.api
          .changeStatus(
            action.programId,
            action.categoryId,
            ReadingStatusDTO.retired
          )
          .pipe(
            map(() =>
              actions.moveCategoryToCompletedInApiSuccess({
                categoryId: action.categoryId,
              })
            ),
            catchError((error) =>
              of(
                actions.moveCategoryToCompletedInInApiFailure({
                  error,
                  categoryId: action.categoryId,
                })
              )
            )
          )
      )
    )
  );

  removeCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.removeCategory),
      mergeMap((action) =>
        this.api.removeCategory(action.programId, action.categoryId).pipe(
          map(() =>
            actions.removeCategoryFromApiSuccess({
              categoryId: action.categoryId,
            })
          ),
          catchError((error) =>
            of(
              actions.removeCategoryFromInApiFailure({
                error,
                categoryId: action.categoryId,
              })
            )
          )
        )
      )
    )
  );

  loadStatistics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSingleWordReadingProgramComponent.loadCategoryStatistics),
      mergeMap((action) =>
        this.api.loadStatistics(action.programId, action.categoryId).pipe(
          map(() =>
            actions.loadCategoryStatisticsFromApiSuccess({
              categoryId: action.categoryId,
            })
          ),
          catchError((error) =>
            of(
              actions.loadCategoryStatisticsFromInApiFailure({
                error,
                categoryId: action.categoryId,
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
