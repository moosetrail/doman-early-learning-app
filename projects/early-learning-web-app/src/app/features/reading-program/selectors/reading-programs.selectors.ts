import { ReadingProgram } from './../models/interfaces/reading-program';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from '../reading-program.state';
import { ReadingProgramState } from '../reading-program.state';
import * as fromChildren from '../../children/selectors/children.selectors';

const schoolCourseState = createFeatureSelector<ReadingProgramState>(
  fromFeature.readingProgramStateFeatureKey
);

const readingProgramsState = createSelector(
  schoolCourseState,
  (state) => state.readingPrograms
);

export const allReadingPrograms = createSelector(
  readingProgramsState,
  fromChildren.allChildren,
  (state, children) => {
    const programs = state.programs.map(
      (dto) =>
        ({
          id: dto.programId,
          children: children.filter((c) => dto.childrenIds.indexOf(c.id) >= 0),
        } as ReadingProgram)
    );

    return programs;
  }
);

export const isLoadingReadingPrograms = createSelector(
  readingProgramsState,
  fromChildren.isLoadingChildren,
  (state, isLoadingChildren) => state.isLoadingPrograms || isLoadingChildren
);

