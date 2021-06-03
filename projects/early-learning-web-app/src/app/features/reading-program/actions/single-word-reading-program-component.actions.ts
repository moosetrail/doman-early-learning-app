import { createAction, props } from '@ngrx/store';

export const loadSingleWordReadingProgramComponents = createAction(
  '[SingleWordReadingProgramComponent] Load initial ReadingCategories',
  props<{programId: string}>()
);

