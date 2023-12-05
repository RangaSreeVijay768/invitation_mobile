import {TestBed} from '@angular/core/testing';

import {CoreSafeAreaService} from './core-safe-area.service';

describe('CoreSafeAreaService', () => {
  let service: CoreSafeAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreSafeAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
