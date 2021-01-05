import { TestBed } from '@angular/core/testing';

import { ReadingProgramService } from './reading-program.service';

describe('ReadingProgramService', () => {
  let service: ReadingProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
