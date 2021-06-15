import { HttpErrorResponse } from '@angular/common/http';
import { ChildDTO } from './../models/dtos/child-dto';
import { createReducer, on } from '@ngrx/store';
import * as fromLoadChildrenEffects from '../actions/load-children-effects.actions';
import * as fromApp from '../../../core/actions/app.actions';

export const childDataFeatureKey = 'childData';

export interface ChildDataState {
  children: ChildDTO[];
  isLoadingChildren: boolean;
  loadingError: HttpErrorResponse | null;
}

export const initialState: ChildDataState = {
  children: [],
  isLoadingChildren: false,
  loadingError: null,
};

export const reducer = createReducer(
  initialState,
  on(fromApp.appInitialize, (state) => ({ ...state, isLoadingChildren: true })),
  on(fromLoadChildrenEffects.loadChildrenFromApiSuccess, (state, payload) => ({
    ...state,
    isLoadingChildren: false,
    children: payload.data,
  })),
  on(fromLoadChildrenEffects.loadChildrenFromApiFailure, (state, payload) => ({
    ...state,
    isLoadingChildren: false,
    loadingError: payload.error,
  }))
);
