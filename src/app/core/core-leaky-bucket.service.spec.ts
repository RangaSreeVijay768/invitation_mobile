import {TestBed} from '@angular/core/testing';

import {CoreLeakyBucketService} from './core-leaky-bucket.service';

describe('CoreLeakyBucketService', () => {
  let service: CoreLeakyBucketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreLeakyBucketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
