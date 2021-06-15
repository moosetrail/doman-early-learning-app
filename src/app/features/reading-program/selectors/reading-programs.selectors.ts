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

const readingProgram = (programId: string) => createSelector(
  readingProgramsState,
  (state) => state.programs.find(x => x.programId === programId)
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

export const childrenOnProgram = (programId: string) => createSelector(
  readingProgram(programId),
  fromChildren.allChildren,
  (dto, allChildren) => {
    if(dto === undefined){
      return [];
    }

    const children = allChildren.filter((c) => dto.childrenIds.indexOf(c.id) >= 0);
    return children;
  }
);

export const haveLoadingError = createSelector(
  readingProgramsState,
  fromChildren.haveLoadingError,
  (state, childLoadingError) => (!state.isLoadingPrograms && state.loadingError != null) || childLoadingError
);

