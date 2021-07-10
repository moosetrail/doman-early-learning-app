import { ReadingCategory } from './../models/interfaces/reading-category';
import { ReadingWord } from './../models/interfaces/reading-word';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReadingProgramState } from '../reading-program.state';
import * as fromFeature from '../reading-program.state';

const schoolCourseState = createFeatureSelector<ReadingProgramState>(
  fromFeature.readingProgramStateFeatureKey
);

const categoriesState = createSelector(
  schoolCourseState,
  (state) => state.readingCategories
);

export const currentCategories = createSelector(
  categoriesState,
  (state) => state.currentCategories
);

export const isLoadingCurrentCategories = createSelector(
  categoriesState,
  (state) => state.loadingCurrent
);

export const errorLoadingCurrentCategories = createSelector(
  categoriesState,
  (state) => state.loadingCurrentError != null
);

export const plannedWordCategories = createSelector(
  categoriesState,
  (state) => {
    const categories = state.plannedCategories
      .filter((x) => {
        if (x.cards[0] != undefined) {
          const card = x.cards[0] as ReadingWord;
          return card.text != undefined;
        }
        return false;
      })
      .map((c) => c as ReadingCategory<ReadingWord>);
    return categories;
  }
);

export const isLoadingPlannedCategories = createSelector(
  categoriesState,
  (state) => state.loadingPlanned
);

export const errorLoadingPlannedCategories = createSelector(
  categoriesState,
  (state) => state.loadingPlannedError != null
);

export const plannedCategoryAtIndex = (index: number) =>
  createSelector(categoriesState, (state) => state.plannedCategories[index]);

export const completedCategories = createSelector(
  categoriesState,
  (state) => state.completedCategories
);

export const isLoadingCompletedCategories = createSelector(
  categoriesState,
  (state) => state.loadingCompleted
);

export const errorLoadingCompletedCategories = createSelector(
  categoriesState,
  (state) => state.loadingCompletedError != null
);
