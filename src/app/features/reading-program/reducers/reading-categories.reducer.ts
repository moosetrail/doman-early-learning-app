import { CategoryServerStatus } from './../models/category-server-status';
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
  plannedCategories: ReadingCategory<ReadingWord | ReadingSentence>[];

  loadingCurrent: boolean;
  loadingCurrentError: HttpErrorResponse | null;
  loadingPlanned: boolean;
  loadingPlannedError: HttpErrorResponse | null;
  loadingCompleted: boolean;
  loadingCompletedError: HttpErrorResponse | null;

  categoriesWaitingForConfirmation: ReadingCategory<
    ReadingWord | ReadingSentence
  >[];
  categoryStatus:  { [key: string]: CategoryServerStatus }
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
  categoriesWaitingForConfirmation: [],
  categoryStatus: {}
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
  ),
  on(
    fromSingleWordReadingProgramComponent.moveCategoryToCurrent,
    (state, payload) => {
      let newState = { ...state };
      let toMove: ReadingCategory<ReadingWord | ReadingSentence> | null = null;

      let index = state.plannedCategories.findIndex(
        (x) => x.id === payload.categoryId
      );

      if (index >= 0) {
        toMove = removeFromList(newState.plannedCategories, index);
      } else {
        index = state.completedCategories.findIndex(
          (x) => x.id === payload.categoryId
        );

        if (index >= 0) {
          toMove = removeFromList(newState.completedCategories, index);
        }
      }

      if (toMove != null) {
        newState.currentCategories.push(toMove);
      }

      return newState;
    }
  ),
  on(fromSingleWordReadingProgramComponent.addNewCategory, (state, payload) => {
    const newState = { ...state };
    newState.plannedCategories = [...state.plannedCategories];
    newState.categoryStatus = {...state.categoryStatus};

    const category = {
      categoryName: payload.name,
      id: 'tempId-' + newState.categoriesWaitingForConfirmation.length + 1,
      cards: payload.words.map((word) => {
        const card = {
          text: word,
          textOnCard: word,
        } as ReadingWord;
        return card;
      }),
    } as ReadingCategory<ReadingWord>;

    newState.plannedCategories.push(category);
    newState.categoryStatus[category.id] = CategoryServerStatus.Adding;

    return newState;
  }),
  on(
    fromSingleWordCategoriesEffects.addNewCategoriesToApiSuccess,
    (state, payload) => {
      const newState = { ...state };
      newState.categoryStatus = {...state.categoryStatus};
      newState.plannedCategories = [...state.plannedCategories];

      const index = newState.plannedCategories.findIndex((x) => x.categoryName == payload.data.categoryName);
      newState.plannedCategories.splice(index, 1, payload.data);
      newState.categoryStatus[payload.data.categoryName] = CategoryServerStatus.NotInUse; // Potential memory leak
      newState.categoryStatus[payload.data.id] = CategoryServerStatus.UpToDate;

      return newState;
    }
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
