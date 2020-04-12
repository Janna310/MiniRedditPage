import { TestBed } from '@angular/core/testing';

import { AwwDataService } from './aww-data.service';

describe('AwwDataService', () => {
  let service: AwwDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwwDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
