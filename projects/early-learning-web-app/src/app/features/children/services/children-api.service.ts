import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChildDTO } from '../models/dtos/child-dto';

@Injectable({
  providedIn: 'root'
})
export class ChildrenApiService {

  constructor(private http: HttpClient) { }

  public getAllUsersChildren(): Observable<ChildDTO[]> {
    return this.http.get<ChildDTO[]>('/api/v1/children');
  }
}
