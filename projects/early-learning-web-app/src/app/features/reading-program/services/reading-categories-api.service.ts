import { ReadingStatusDTO } from './../models/dtos/reading-unit-status-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleWordReadingCategoryDto } from '../models/dtos/single-word-reading-category-dto';

@Injectable({
  providedIn: 'root',
})
export class ReadingCategoriesApiService {
  private apiBase = '/api/v1/reading-words-categories';

  constructor(private http: HttpClient) {}

  public getCurrent(programId: string): Observable<SingleWordReadingCategoryDto[]> {
    const params = this.createProgramParams(programId);

    return this.http.get<SingleWordReadingCategoryDto[]>(
      this.apiBase + '/current', {params}
    );
  }

  public getPlanned(programId: string, limit = 10, offset = 0): Observable<SingleWordReadingCategoryDto[]> {
    return this.getList(programId, limit, offset, '/planned');
  }

  public getRetired(programId: string, limit = 10, offset = 0): Observable<SingleWordReadingCategoryDto[]> {
    return this.getList(programId, limit, offset, '/retired');
  }

  public addCategory(programId: string, title: string, cards: string[]): Observable<SingleWordReadingCategoryDto> {
    const toAdd = {
      title,
      onTheCards: cards
    };

    const params = this.createProgramParams(programId);

    return this.http.post<SingleWordReadingCategoryDto>(this.apiBase, toAdd, {params});
  }

  public changeStatus(programId: string, unitId: string, newStatus: ReadingStatusDTO): Observable<void> {
    let params = this.createProgramParams(programId);
    params = params.append('unitId', unitId);
    params = params.append('newStatus', JSON.stringify(newStatus));

    return this.http.patch<void>(this.apiBase + '/status', null, {params});
  }

  public movePlanned(programId: string, unitId: string, toSpot: number): Observable<void> {
    let params = this.createProgramParams(programId);
    params = params.append('unitId', unitId);
    params = params.append('toSpot', JSON.stringify(toSpot));

    return this.http.patch<void>(this.apiBase + '/move', null, {params});
  }

  private createProgramParams(programId: string): HttpParams {
    let params = new HttpParams();
    params = params.append('programId', programId);
    return params;
  }

  private getList(programId: string, limit: number, offset: number, urlEnd: string):  Observable<SingleWordReadingCategoryDto[]>{
    let params = this.createProgramParams(programId);
    params = params.append('limit', JSON.stringify(limit));
    params = params.append('offset', JSON.stringify(offset));

    return this.http.get<SingleWordReadingCategoryDto[]>(this.apiBase + urlEnd, {params});
  }
}
