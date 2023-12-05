import {TestBed} from '@angular/core/testing';

import {UnqueryParserService} from './unquery-parser.service';

describe('UnqueryParserService', () => {
  let service: UnqueryParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnqueryParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
