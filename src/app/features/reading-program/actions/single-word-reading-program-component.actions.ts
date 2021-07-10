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

export const moveCategoryToCurrent = createAction(
  '[SingleWordReadingProgramComponent] Move category to current',
  props<{programId: string, categoryId: string}>()
);

export const moveCategoryToCompleted = createAction(
  '[SingleWordReadingProgramComponent] Move category to completed',
  props<{programId: string, categoryId: string}>()
);

export const removeCategory = createAction(
  '[SingleWordReadingProgramComponent] Remove category',
  props<{programId: string, categoryId: string}>()
);

export const loadCategoryStatistics = createAction(
  '[SingleWordReadingProgramComponent] Load category statistics',
  props<{programId: string, categoryId: string}>()
);
