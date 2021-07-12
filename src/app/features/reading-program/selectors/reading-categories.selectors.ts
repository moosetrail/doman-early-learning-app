import { ReadingSentence } from './../models/interfaces/reading-sentence';
import { ReadingCategory } from './../models/interfaces/reading-category';
import { ReadingWord } from './../models/interfaces/reading-word';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReadingProgramState } from '../reading-program.state';
import * as fromFeature from '../reading-program.state';
import { CategoryServerStatus } from '../models/category-server-status';

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

export const categoryServerStatus = (categoryId: string) =>
  createSelector(categoriesState, (state) => state.categoryStatus[categoryId]);

export const plannedCategoriesServerStatus = createSelector(
  categoriesState,
  (state) => statusList(state.plannedCategories, state.categoryStatus)
);

function statusList(
  list: ReadingCategory<ReadingWord | ReadingSentence>[],
  statusList: { [key: string]: CategoryServerStatus }
): { [key: string]: CategoryServerStatus } {
  const statuses: { [key: string]: CategoryServerStatus } = {};

  list.forEach((category) => {
    statuses[category.id] = statusList[category.id];
  });

  return statuses;
}

export const currentCategoriesServerStatus = createSelector(
  categoriesState,
  (state) => statusList(state.currentCategories, state.categoryStatus)
);

export const completedCategoriesServerStatus = createSelector(
  categoriesState,
  (state) => statusList(state.completedCategories, state.categoryStatus)
);

export const categoryIdFromName = (categoryName: string) =>
  createSelector(categoriesState, (state) => {
    let category = searchForCategoryWithName(
      categoryName,
      state.plannedCategories
    );

    if (category == null) {
      category = searchForCategoryWithName(
        categoryName,
        state.currentCategories
      );
    }
    if (category == null) {
      category = searchForCategoryWithName(
        categoryName,
        state.completedCategories
      );
    }

    if (category == null) {
      return '';
    }

    return category.id;
  });

function searchForCategoryWithName(
  name: string,
  list: ReadingCategory<ReadingWord | ReadingSentence>[]
): ReadingCategory<ReadingWord | ReadingSentence> | null {
  let category = list.find((x) => x.categoryName === name);

  if (category == undefined) {
    return null;
  }

  return category;
}
