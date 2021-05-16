import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from '../reading-program.state';
import { ReadingProgramState } from '../reading-program.state';

const schoolCourseState = createFeatureSelector<ReadingProgramState>(
  fromFeature.readingProgramStateFeatureKey
);

const readingProgramsState = createSelector(schoolCourseState, (state) => state.readingPrograms);

export const allReadingPrograms = createSelector(
  readingProgramsState,
  (state) => state.programs
);

