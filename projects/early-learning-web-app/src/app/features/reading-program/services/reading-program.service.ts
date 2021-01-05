import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ReadingProgram } from '../models/interfaces/reading-program';

@Injectable({
  providedIn: 'root',
})
export class ReadingProgramService {
  constructor() {}

  public getAllReadingPrograms(): Observable<ReadingProgram[]> {
    return of([
      {
        children: [{ name: 'Phoenix' }],
      } as ReadingProgram,
      {
        children: [
          { name: 'Zacharias' },
          { name: 'Jacqueline' },
          { name: 'Dominiqué' },
        ],
      } as ReadingProgram,
    ]);
  }
}
