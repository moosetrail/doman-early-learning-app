import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProgramType } from '../../../shared/models/interfaces/program-type';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor() { }

  public getAllProgramTypes(): Observable<ProgramType[]>{
    return of([
      {name: 'Reading program', type: 1},
      {name: 'Math program', type: 2},
      {name: 'Meaningful sounds', type: 3}
    ])
  }
}
