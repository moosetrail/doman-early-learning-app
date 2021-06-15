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
