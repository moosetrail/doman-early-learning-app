import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromChildState from './ChildState';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    StoreModule.forFeature(fromChildState.childStateFeatureKey, fromChildState.reducers, { metaReducers: fromChildState.metaReducers })
  ]
})
export class ChildrenModule { }
