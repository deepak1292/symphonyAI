import { TestBed } from '@angular/core/testing';

import { JobspostsService } from './jobsposts.service';

describe('JobspostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobspostsService = TestBed.get(JobspostsService);
    expect(service).toBeTruthy();
  });
});
