import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromReadingPrograms from './reducers/reading-programs.reducer';
import * as fromReadingCategories from './reducers/reading-categories.reducer';

export const readingProgramStateFeatureKey = 'readingProgramState';

export interface ReadingProgramState {

  [fromReadingPrograms.readingProgramsDataFeatureKey]: fromReadingPrograms.ReadingProgramsDataState;
  [fromReadingCategories.readingCategoriesFeatureKey]: fromReadingCategories.ReadingCategoriesState;
}

export const reducers: ActionReducerMap<ReadingProgramState> = {

  [fromReadingPrograms.readingProgramsDataFeatureKey]: fromReadingPrograms.reducer,
  [fromReadingCategories.readingCategoriesFeatureKey]: fromReadingCategories.reducer,
};


export const metaReducers: MetaReducer<ReadingProgramState>[] = !environment.production ? [] : [];
