import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReadingProgramState } from '../reading-program.state';
import * as fromFeature from '../reading-program.state';

const schoolCourseState = createFeatureSelector<ReadingProgramState>(
  fromFeature.readingProgramStateFeatureKey
);

export const currentCategories = createSelector(
  schoolCourseState,
  (state) => []
);

export const plannedCategories = createSelector(
  schoolCourseState,
  (state) => []
);

export const completedCategories = createSelector(
  schoolCourseState,
  (state) => []
);
