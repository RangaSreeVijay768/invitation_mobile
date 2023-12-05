import {TestBed} from '@angular/core/testing';

import {CoreBrowsertabService} from './core-browsertab.service';

describe('CoreBrowsertabService', () => {
  let service: CoreBrowsertabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreBrowsertabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
