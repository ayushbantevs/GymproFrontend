import { TestBed } from '@angular/core/testing';

import { GymuserService } from './gymuser.service';

describe('GymuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymuserService = TestBed.get(GymuserService);
    expect(service).toBeTruthy();
  });
});
