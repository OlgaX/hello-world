import {TestBed} from '@angular/core/testing';

import {ShowDetailsService} from './show-details.service';

describe('ShowDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowDetailsService = TestBed.get(ShowDetailsService);
    expect(service).toBeTruthy();
  });
});
