import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ReadingProgramDto } from '../models/dtos/reading-program-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadingProgramApiService {

  constructor(private http: HttpClient) { }

  public getAllReadingPrograms(): Observable<ReadingProgramDto[]>{
    return this.http.get<ReadingProgramDto[]>('/api/v1/reading-program');
  }
}
