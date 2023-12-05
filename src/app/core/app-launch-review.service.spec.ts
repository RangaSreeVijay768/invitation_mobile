import {TestBed} from '@angular/core/testing';

import {AppLaunchReviewService} from './app-launch-review.service';

describe('AppLaunchReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLaunchReviewService = TestBed.get(AppLaunchReviewService);
    expect(service).toBeTruthy();
  });
});
