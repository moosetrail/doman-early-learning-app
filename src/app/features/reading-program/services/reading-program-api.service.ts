import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ReadingProgramDto as ReadingProgramDTO } from '../models/dtos/reading-program-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadingProgramApiService {

  constructor(private http: HttpClient) { }

  public getAllReadingPrograms(): Observable<ReadingProgramDTO[]>{
    return this.http.get<ReadingProgramDTO[]>('/api/v1/reading-program');
  }
}
