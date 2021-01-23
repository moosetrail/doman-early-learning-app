import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Child } from '../models/interfaces/child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor() { }

  public getAllChildren(): Observable<Child[]>{
    return of([
      {name: 'Phoenix'},
      {name: 'Zacharias'},
      {name: 'Jacqueline'},
      {name: 'Dominique'}
    ])
  }
}
