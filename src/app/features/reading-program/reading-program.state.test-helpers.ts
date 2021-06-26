import * as fromState from './reading-program.state';
import * as fromReadingCategories from './reducers/reading-categories.reducer';
import * as fromReadingPrograms from './reducers/reading-programs.reducer';
import * as fromChildState from '../children/children.state.test-helpers'

export const initialReadingState = {
  [fromState.readingProgramStateFeatureKey]: {
    [fromReadingPrograms.readingProgramsDataFeatureKey]: {...fromReadingPrograms.initialState},
    [fromReadingCategories.readingCategoriesFeatureKey]: {...fromReadingCategories.initialState},
  },
  ...fromChildState.childInitialState
};
