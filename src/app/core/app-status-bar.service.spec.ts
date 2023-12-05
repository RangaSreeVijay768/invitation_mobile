import {TestBed} from '@angular/core/testing';

import {AppStatusBarService} from './app-status-bar.service';

describe('AppStatusBarService', () => {
  let service: AppStatusBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStatusBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
