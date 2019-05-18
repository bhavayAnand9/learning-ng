import { TestBed } from '@angular/core/testing';

import { FetchResposService } from './fetch-respos.service';

describe('FetchResposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchResposService = TestBed.get(FetchResposService);
    expect(service).toBeTruthy();
  });
});
