import { TestBed } from '@angular/core/testing';

import { ReadingProgramApiService } from './reading-program-api.service';

describe('ReadingProgramApiService', () => {
  let service: ReadingProgramApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingProgramApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
