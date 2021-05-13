import { ReadingProgram } from './../models/interfaces/reading-program';
import { Action, createReducer, on } from '@ngrx/store';


export const readingProgramsDataFeatureKey = 'readingPrograms';

export interface ReadingProgramsDataState {
  programs: ReadingProgram[];
}

export const initialState: ReadingProgramsDataState = {
  programs: []
};


export const reducer = createReducer(
  initialState,
);

