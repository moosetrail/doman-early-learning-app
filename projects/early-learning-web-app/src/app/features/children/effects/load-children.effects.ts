import { map, mergeMap, catchError } from 'rxjs/operators';
import { ChildrenApiService } from './../services/children-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromApp from '../../../core/actions/app.actions';
import * as actions from '../actions/load-children-effects.actions';
import { of } from 'rxjs';

@Injectable()
export class LoadChildrenEffects {
  loadAllUserChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromApp.appInitialize),
      mergeMap(() =>
        this.api.getAllUsersChildren().pipe(
          map((children) =>
            actions.loadChildrenFromApiSuccess({ data: children })
          ),
          catchError((error) =>
            of(actions.loadChildrenFromApiFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: ChildrenApiService) {}
}
