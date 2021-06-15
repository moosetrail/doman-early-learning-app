import { ReadingProgramDto } from './../../reading-program/models/dtos/reading-program-dto';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadReadingProgramsFromApiSuccess = createAction(
  '[LoadReadingProgramsEffects] Load ReadingProgram from API Success',
  props<{ data: ReadingProgramDto[] }>()
);

export const loadReadingProgramsFromApiFailure = createAction(
  '[LoadReadingProgramsEffects] Load ReadingProgram from API Failure',
  props<{ error: HttpErrorResponse }>()
);
