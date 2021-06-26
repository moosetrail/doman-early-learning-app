import * as fromState from './children.state';
import * as fromChildren from './reducers/child-data.reducer';

export const childInitialState = {
  [fromState.childStateFeatureKey]: {
    [fromChildren.childDataFeatureKey]: {...fromChildren.initialState}
  }
}
