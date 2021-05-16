import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromChildState from './children.state';
import { EffectsModule } from '@ngrx/effects';
import { LoadChildrenEffects } from './effects/load-children.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    StoreModule.forFeature(fromChildState.childStateFeatureKey, fromChildState.reducers, { metaReducers: fromChildState.metaReducers }),
    EffectsModule.forFeature([LoadChildrenEffects])
  ]
})
export class ChildrenModule { }
