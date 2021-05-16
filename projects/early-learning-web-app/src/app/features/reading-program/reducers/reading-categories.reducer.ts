import { ReadingSentence } from './../models/interfaces/reading-sentence';
import { Action, createReducer, on } from '@ngrx/store';
import { ReadingCategory } from '../models/interfaces/reading-category';
import { ReadingWord } from '../models/interfaces/reading-word';


export const readingCategoriesFeatureKey = 'readingCategories';

export interface ReadingCategoriesState {
  completedCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
  currentCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
  plannedCategories: ReadingCategory<ReadingWord | ReadingSentence>[];
}

export const initialState: ReadingCategoriesState = {
  completedCategories: [],
  currentCategories: [],
  plannedCategories: []
};


export const reducer = createReducer(
  initialState,
);

