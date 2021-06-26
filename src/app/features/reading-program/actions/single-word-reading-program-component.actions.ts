import { createAction, props } from '@ngrx/store';

export const loadSingleWordReadingProgramComponents = createAction(
  '[SingleWordReadingProgramComponent] Load initial ReadingCategories',
  props<{programId: string}>()
);

export const addNewCategory = createAction(
  '[SingleWordReadingProgramComponent] Add new category',
  props<{name: string, words: string[], programId: string}>()
);

export const moveCategory = createAction(
  '[SingleWordReadingProgramComponent] Move category',
  props<{fromList: string | null, toList: string | null, previousIndex: number, newIndex: number, programId: string }>()
);
