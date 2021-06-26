import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ReadingCategory } from '../models/interfaces/reading-category';
import { ReadingWord } from '../models/interfaces/reading-word';

export const loadSCurrentCategoriesFromApiSuccess = createAction(
  '[SingleWordsCategoriesEffects] Load Current Categories from API Success',
  props<{ data: ReadingCategory<ReadingWord>[] }>()
);

export const loadSCurrentCategoriesFromApiFailure = createAction(
  '[SingleWordsCategoriesEffects] Load Current Categories from API Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadPlannedCategoriesFromApiSuccess = createAction(
  '[SingleWordsCategoriesEffects] Load Planned Categories from API Success',
  props<{ data: ReadingCategory<ReadingWord>[], limit: number, offset: number }>()
);

export const loadPlannedCategoriesFromApiFailure = createAction(
  '[SingleWordsCategoriesEffects] Load Planned Categories from API Failure',
  props<{ error: HttpErrorResponse }>()
);

export const addNewCategoriesToApiSuccess = createAction(
  '[SingleWordsCategoriesEffects] Add new category to API Success',
  props<{ data: ReadingCategory<ReadingWord> }>()
);

export const addNewCategoriesToApiFailure = createAction(
  '[SingleWordsCategoriesEffects] Add new category to API Failure',
  props<{ error: HttpErrorResponse }>()
);

export const movePlannedCategoryInApiSuccess =  createAction(
  '[SingleWordsCategoriesEffects] Move Planned Category in API Success',
  props<{ newIndex: number, categoryId: string }>()
);

export const movePlannedCategoryInApiFailure =  createAction(
  '[SingleWordsCategoriesEffects] Move Planned Category in API Failure',
  props<{ newIndex: number, categoryId: string, error: HttpErrorResponse }>()
);
