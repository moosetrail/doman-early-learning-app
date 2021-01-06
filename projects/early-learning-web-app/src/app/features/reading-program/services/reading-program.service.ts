import { ReadingCategory } from './../models/interfaces/reading-category';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ReadingProgram } from '../models/interfaces/reading-program';
import { ReadingWord } from '../models/interfaces/reading-word';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReadingProgramService {
  private currentProgram$: BehaviorSubject<ReadingProgram | null> = new BehaviorSubject<ReadingProgram | null>(
    {
      children: [{ name: 'Phoenix' }],
    } as ReadingProgram
  );

  constructor() {}

  public getAllReadingPrograms(): Observable<ReadingProgram[]> {
    return of([
      {
        children: [{ name: 'Phoenix' }],
      } as ReadingProgram /*
      {
        children: [
          { name: 'Zacharias' },
          { name: 'Jacqueline' },
          { name: 'Dominiqué' },
        ],
      } as ReadingProgram, */,
    ]).pipe(
      tap((programs) => {
        if (programs.length === 1) {
          this.currentProgram$.next(programs[0]);
        }
      })
    );
  }

  public getCurrentProgram(): Observable<ReadingProgram | null> {
    return this.currentProgram$;
  }

  public setCurrentReadingProgram(program: ReadingProgram) {
    this.currentProgram$.next(program);
  }

  public getCurrentWordCategories(): Observable<
    ReadingCategory<ReadingWord>[]
  > {
    return of([
      {
        categoryName: 'Pippi Långstrump',
        cards: [
          { textOnCard: 'Pippi' },
          { textOnCard: 'Långstrump' },
          { textOnCard: 'Annika' },
          { textOnCard: 'Tommy' },
          { textOnCard: 'Herr Nilsson' },
        ],
      },
      {
        categoryName: 'Paw Patrol',
        cards: [
          { textOnCard: 'Chase' },
          { textOnCard: 'Marshall' },
          { textOnCard: 'Rubble' },
          { textOnCard: 'Zuma' },
          { textOnCard: 'Sky' },
        ],
      },
      {
        categoryName: 'Årstiderna',
        cards: [
          { textOnCard: 'Vinter' },
          { textOnCard: 'Vår' },
          { textOnCard: 'Sommar' },
          { textOnCard: 'Höst' },
          { textOnCard: 'Årstider' },
        ],
      },
      {
        categoryName: 'Frost 3',
        cards: [
          { textOnCard: 'Anna' },
          { textOnCard: 'Elsa' },
          { textOnCard: 'Olof' },
          { textOnCard: 'Sven' },
          { textOnCard: 'Kristoffer' },
        ],
      },
      {
        categoryName: 'Aktiviteter',
        cards: [
          { textOnCard: 'Springa' },
          { textOnCard: 'Dansa' },
          { textOnCard: 'Skutta' },
          { textOnCard: 'Hoppa' },
          { textOnCard: 'Skoja' },
        ],
      },
    ]);
  }

  public getPlannedSingleWordSets(
    programId: string
  ): Observable<ReadingCategory<ReadingWord>[]> {
    return of([]);
  }
}
