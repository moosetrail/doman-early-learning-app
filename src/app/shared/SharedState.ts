import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export const sharedStateFeatureKey = 'sharedState';

export interface SharedState {

}

export const reducers: ActionReducerMap<SharedState> = {

};


export const metaReducers: MetaReducer<SharedState>[] = !environment.production ? [] : [];
