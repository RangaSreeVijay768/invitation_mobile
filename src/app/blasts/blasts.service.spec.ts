import { TestBed } from '@angular/core/testing';

import { BlastsService } from './blasts.service';

describe('BlastsService', () => {
  let service: BlastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
