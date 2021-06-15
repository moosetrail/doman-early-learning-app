import { TestBed } from '@angular/core/testing';

import { ReadingCategoriesApiService } from './reading-categories-api.service';

describe('ReadingCategoriesApiService', () => {
  let service: ReadingCategoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingCategoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
