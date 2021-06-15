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

  private testSet1 = [
    {
      categoryName: 'Pippi Långstrump',
      cards: [
        { textOnCard: 'Pippi' },
        { textOnCard: 'Långstrump' },
        { textOnCard: 'Annika' },
        { textOnCard: 'Tommy' },
        { textOnCard: 'Herr Nilsson' },
      ],
    } as ReadingCategory<ReadingWord>,
    {
      categoryName: 'Paw Patrol',
      cards: [
        { textOnCard: 'Chase' },
        { textOnCard: 'Marshall' },
        { textOnCard: 'Rubble' },
        { textOnCard: 'Zuma' },
        { textOnCard: 'Sky' },
      ],
    } as ReadingCategory<ReadingWord>,
    {
      categoryName: 'Årstiderna',
      cards: [
        { textOnCard: 'Vinter' },
        { textOnCard: 'Vår' },
        { textOnCard: 'Sommar' },
        { textOnCard: 'Höst' },
        { textOnCard: 'Årstider' },
      ],
    } as ReadingCategory<ReadingWord>,
    {
      categoryName: 'Frost 3',
      cards: [
        { textOnCard: 'Anna' },
        { textOnCard: 'Elsa' },
        { textOnCard: 'Olof' },
        { textOnCard: 'Sven' },
        { textOnCard: 'Kristoffer' },
      ],
    } as ReadingCategory<ReadingWord>,
    {
      categoryName: 'Aktiviteter',
      cards: [
        { textOnCard: 'Springa' },
        { textOnCard: 'Dansa' },
        { textOnCard: 'Skutta' },
        { textOnCard: 'Hoppa' },
        { textOnCard: 'Skoja' },
      ],
    } as ReadingCategory<ReadingWord>,
  ];

  private currentProgram$: BehaviorSubject<ReadingProgram | null> = new BehaviorSubject<ReadingProgram | null>(null);

  constructor() {}

  public getAllReadingPrograms(): Observable<ReadingProgram[]> {
    return of([
      {
        children: [{ firstName: 'Phoenix' }],
      } as ReadingProgram,
      {
        children: [
          { firstName: 'Zacharias' },
          { firstName: 'Jacqueline' },
          { firstName: 'Dominiqué' },
        ],
      } as ReadingProgram,
    ]).pipe(
      tap((programs) => {
        if (programs.length === 1) {
          this.currentProgram$.next(programs[0]);
        }
      })
    );
  }

  public getCurrentProgram(): Observable<ReadingProgram | null> {
    return this.currentProgram$.asObservable();
  }

  public setCurrentReadingProgram(program: ReadingProgram) {
    this.currentProgram$.next(program);
  }

  public getCurrentWordCategories(): Observable<
    ReadingCategory<ReadingWord>[]
  > {
    return of(this.testSet1);
  }

  public getPlannedWordCategories(): Observable<ReadingCategory<ReadingWord>[]> {
    return of([...this.testSet1]);
  }

  public getCompletedWordCategories(): Observable<ReadingCategory<ReadingWord>[]> {
    return of([...this.testSet1]);
  }
}
