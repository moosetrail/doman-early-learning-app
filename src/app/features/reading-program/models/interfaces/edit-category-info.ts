import { Child } from 'src/app/shared/models/interfaces/child';
import { ReadingCard } from './reading-card';
import { ReadingCategory } from './reading-category';
export interface EditCategoryInfo<T extends ReadingCard> {
  category: ReadingCategory<T>;
  children: Child[];
}
