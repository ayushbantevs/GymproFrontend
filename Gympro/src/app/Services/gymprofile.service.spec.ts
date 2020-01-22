import { TestBed } from '@angular/core/testing';

import { GymprofileService } from './gymprofile.service';

describe('GymprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymprofileService = TestBed.get(GymprofileService);
    expect(service).toBeTruthy();
  });
});
