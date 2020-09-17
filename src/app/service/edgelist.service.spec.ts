import { TestBed } from '@angular/core/testing';

import { EdgelistService } from './edgelist.service';

describe('EdgelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdgelistService = TestBed.get(EdgelistService);
    expect(service).toBeTruthy();
  });
});
