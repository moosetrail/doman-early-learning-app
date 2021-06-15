import { TestBed } from '@angular/core/testing';

import { ChildrenApiService } from './children-api.service';

describe('ChildrenApiService', () => {
  let service: ChildrenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildrenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
