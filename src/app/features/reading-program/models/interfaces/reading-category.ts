import { ReadingCard } from './reading-card';

export interface ReadingCategory<T extends ReadingCard> {
  categoryName: string;
  cards: T[];
  id: string
}
