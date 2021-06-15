import { HttpErrorResponse } from '@angular/common/http';
import { ReadingSentence } from './../models/interfaces/reading-sentence';
import { Action, createReducer, on } from '@ngrx/store';
import { ReadingCategory } from '../models/interfaces/reading-category';
import { ReadingWord } from '../models/interfaces/reading-word';
import * as fromSingleWordReadingProgramComponent from './../actions/single-word-reading-program-component.actions';
import * as fromSingleWordCategoriesEffects from './../actions/single-words-categories-effects.actions';

export const readingCategoriesFeatureKey = 'readingCategories';

export interface ReadingCategoriesState {
  programId: string | null;
  completedCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
  currentCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
  loadingCurrent: boolean;
  loadingCurrentError: HttpErrorResponse | null;

  plannedCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
}

export const initialState: ReadingCategoriesState = {
  programId: null,
  completedCategories: [],
  currentCategories: [],
  loadingCurrent: false,
  loadingCurrentError: null,
  plannedCategories: [],
};

export const reducer = createReducer(
  initialState,
  on(
    fromSingleWordReadingProgramComponent.loadSingleWordReadingProgramComponents,
    (state, payload) => {
      if (payload.programId !== state.programId) {
        return {
          ...initialState,
          programId: payload.programId,
          loadingCurrent: true,
        };
      } else {
        return { ...state, loadingCurrent: true };
      }
    }
  ),
  on(
    fromSingleWordCategoriesEffects.loadSCurrentCategoriesFromApiSuccess,
    (state, payload) => ({
      ...state,
      currentCategories: payload.data,
      loadingCurrent: false,
    })
  ),
  on(
    fromSingleWordCategoriesEffects.loadSCurrentCategoriesFromApiFailure,
    (state, payload) => ({
      ...state,
      loadingCurrent: false,
      loadingCurrentError: payload.error,
    })
  )
);
