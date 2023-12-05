import {TestBed} from '@angular/core/testing';

import {CorePlatformService} from './core-platform.service';

describe('CorePlatformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorePlatformService = TestBed.get(CorePlatformService);
    expect(service).toBeTruthy();
  });
});
