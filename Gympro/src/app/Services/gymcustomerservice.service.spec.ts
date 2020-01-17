import { TestBed } from '@angular/core/testing';

import { GymcustomerserviceService } from './gymcustomerservice.service';

describe('GymcustomerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymcustomerserviceService = TestBed.get(GymcustomerserviceService);
    expect(service).toBeTruthy();
  });
});
