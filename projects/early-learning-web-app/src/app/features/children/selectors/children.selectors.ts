import { ChildState } from './../children.state';
import { Child } from './../../../shared/models/interfaces/child';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from '../children.state';

const childState = createFeatureSelector<ChildState>(fromFeature.childStateFeatureKey);

const childDataState = createSelector(childState, (state) => state.childData);

export const allChildren = createSelector(
  childDataState,
  (state) => {
    const children = state.children.map((dto) => dto as Child);
    return children;
  }
);

export const isLoadingChildren = createSelector(
  childDataState,
  (state) => state.isLoadingChildren
);


