import {TestBed} from '@angular/core/testing';

import {NgHttpCachingServiceService} from './ng-http-caching-service.service';

describe('NgHttpCachingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgHttpCachingServiceService = TestBed.get(NgHttpCachingServiceService);
    expect(service).toBeTruthy();
  });
});
