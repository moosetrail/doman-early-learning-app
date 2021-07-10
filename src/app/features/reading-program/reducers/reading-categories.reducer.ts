import { HttpErrorResponse } from '@angular/common/http';
import { ReadingSentence } from './../models/interfaces/reading-sentence';
import { createReducer, on } from '@ngrx/store';
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
  loadingPlanned: boolean;
  loadingPlannedError: HttpErrorResponse | null;
  loadingCompleted: boolean;
  loadingCompletedError: HttpErrorResponse | null;

  plannedCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
}

export const initialState: ReadingCategoriesState = {
  programId: null,
  completedCategories: [],
  currentCategories: [],
  loadingCurrent: false,
  loadingCurrentError: null,
  plannedCategories: [],
  loadingPlanned: false,
  loadingPlannedError: null,
  loadingCompleted: false,
  loadingCompletedError: null,
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
          loadingPlanned: true,
        };
      } else {
        return { ...state, loadingCurrent: true, loadingPlanned: true };
      }
    }
  ),
  on(
    fromSingleWordReadingProgramComponent.loadCompletedCategories,
    (state) => ({
      ...state,
      loadingCompleted: true,
      loadingCompletedError: null,
    })
  ),
  on(fromSingleWordReadingProgramComponent.moveCategory, (state, payload) => {
    if (payload.fromList == payload.toList) {
      let planned = [...state.plannedCategories];
      const toMove = removeFromList(planned, payload.previousIndex);

      planned.splice(payload.newIndex, 0, toMove);
      return { ...state, plannedCategories: planned };
    }

    return { ...state };
  }),
  on(
    fromSingleWordReadingProgramComponent.moveCategoryToCurrent,
    (state, payload) => {
      let categoryIndex = state.plannedCategories.findIndex(
        (x) => x.id == payload.categoryId
      );

      if (categoryIndex >= 0) {
        let planned = [...state.plannedCategories];
        const toMove = removeFromList(planned, categoryIndex);

        let current = [...state.currentCategories];
        current.push(toMove);
        return {
          ...state,
          plannedCategories: planned,
          currentCategories: current,
        };
      }

      return { ...state };
    }
  ),
  on(
    fromSingleWordReadingProgramComponent.moveCategoryToCompleted,
    (state, payload) => {
      let categoryIndex = state.plannedCategories.findIndex(
        (x) => x.id == payload.categoryId
      );

      if (categoryIndex >= 0) {
        let planned = [...state.plannedCategories];
        const toMove = removeFromList(planned, categoryIndex);

        let completed = [...state.completedCategories];
        completed.push(toMove);
        return {
          ...state,
          plannedCategories: planned,
          completedCategories: completed,
        };
      }

      return { ...state };
    }
  ),
  on(fromSingleWordReadingProgramComponent.removeCategory, (state, payload) => {
    let categoryIndex = state.plannedCategories.findIndex(
      (x) => x.id == payload.categoryId
    );
    if (categoryIndex >= 0) {
      let planned = [...state.plannedCategories];
      removeFromList(planned, categoryIndex);

      return { ...state, plannedCategories: planned };
    }

    return { ...state };
  }),
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
  ),
  on(
    fromSingleWordCategoriesEffects.loadPlannedCategoriesFromApiSuccess,
    (state, payload) => ({
      ...state,
      plannedCategories: payload.data,
      loadingPlanned: false,
    })
  ),
  on(
    fromSingleWordCategoriesEffects.loadPlannedCategoriesFromApiFailure,
    (state, payload) => ({
      ...state,
      loadingPlanned: false,
      loadingPlannedError: payload.error,
    })
  ),
  on(
    fromSingleWordCategoriesEffects.loadCompletedCategoriesFromApiSuccess,
    (state, payload) => {
      let completed = [...state.completedCategories];
      completed.splice(payload.offset, payload.limit);
      completed.splice(payload.offset, 0, ...payload.data);

      return {
        ...state,
        completedCategories: completed,
        loadingCompleted: false,
      };
    }
  ),
  on(
    fromSingleWordCategoriesEffects.loadCompletedCategoriesFromInApiFailure,
    (state, payload) => ({
      ...state,
      loadingCompleted: false,
      loadingCompletedError: payload.error,
    })
  )
);

function removeFromList(
  planned: ReadingCategory<ReadingWord | ReadingSentence>[],
  categoryIndex: number
) {
  const toMove = planned[categoryIndex];
  planned.splice(categoryIndex, 1);
  return toMove;
}
