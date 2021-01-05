import { Child } from 'projects/early-learning-web-app/src/app/shared/models/interfaces/child';

export interface ReadingProgram {
  id: string;
  children: Child[];
  nbrOfSessionsDay: number;
  nbrOfDays: number;
}
