import { ChildDTO } from './../models/dtos/child-dto';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadChildrenFromApiSuccess = createAction(
  '[LoadChildrenEffects] Load children from API success',
  props<{ data: ChildDTO[] }>()
);

export const loadChildrenFromApiFailure = createAction(
  '[LoadChildrenEffects] Load children from API failure',
  props<{ error: HttpErrorResponse }>()
);
