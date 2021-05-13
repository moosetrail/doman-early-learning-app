import { Action, createReducer, on } from '@ngrx/store';
import { Child } from '../../../shared/models/interfaces/child';


export const childDataFeatureKey = 'childData';

export interface ChildDataState {
  children: Child[];
}

export const initialState: ChildDataState = {
  children: []
};


export const reducer = createReducer(
  initialState,

);

