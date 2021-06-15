import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromChildData from './reducers/child-data.reducer';

export const childStateFeatureKey = 'childState';

export interface ChildState {
  [fromChildData.childDataFeatureKey]: fromChildData.ChildDataState;
}

export const reducers: ActionReducerMap<ChildState> = {
  [fromChildData.childDataFeatureKey]: fromChildData.reducer,
};


export const metaReducers: MetaReducer<ChildState>[] = !environment.production ? [] : [];
