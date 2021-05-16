import { TestBed } from '@angular/core/testing';

import { SingleWordCategoriesApiService } from './single-word-categories-api.service';

describe('SingleWordCategoriesApiService', () => {
  let service: SingleWordCategoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleWordCategoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
