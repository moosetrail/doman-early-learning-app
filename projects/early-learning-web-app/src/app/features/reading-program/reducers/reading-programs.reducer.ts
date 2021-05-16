import { ReadingProgramDto } from './../../reading-program/models/dtos/reading-program-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromPlanSingleWordsComponent from '../actions/plan-single-words.actions';
import * as fromLoadReadingProgramsEffects from '../actions/load-reading-programs-effects.actions';

export const readingProgramsDataFeatureKey = 'readingPrograms';

export interface ReadingProgramsDataState {
  programs: ReadingProgramDto[];
  isLoadingPrograms: boolean;
  loadingError: HttpErrorResponse | null;
}

export const initialState: ReadingProgramsDataState = {
  programs: [],
  isLoadingPrograms: false,
  loadingError: null,
};

export const reducer = createReducer(
  initialState,
  on(fromPlanSingleWordsComponent.loadSingleWordsPrograms, (state) => ({
    ...state,
    isLoadingPrograms: true,
    loadingError: null,
  })),
  on(
    fromLoadReadingProgramsEffects.loadReadingProgramsFromApiFailure,
    (state, payload) => ({
      ...state,
      isLoadingPrograms: false,
      loadingError: payload.error,
    })
  ),
  on(
    fromLoadReadingProgramsEffects.loadReadingProgramsFromApiSuccess,
    (state, payload) => ({
      ...state,
      isLoadingPrograms: false,
      programs: payload.data
    })
  ),
);
