import { Child } from 'src/app/shared/models/interfaces/child';

export interface ReadingProgram {
  id: string;
  children: Child[];
  nbrOfSessionsDay: number;
  nbrOfDays: number;
}
