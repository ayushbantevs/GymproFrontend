import { GymlistService } from "./gymlist.service";
import { TestBed } from "@angular/core/testing";

describe("GymlistService", () => {

  let service: GymlistService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GymlistService
      ]
    });
    service = TestBed.get(GymlistService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
