import { Edit_profileService } from "./edit_profile.service";
import { TestBed } from "@angular/core/testing";

describe("Edit_profileService", () => {

  let service: Edit_profileService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Edit_profileService
      ]
    });
    service = TestBed.get(Edit_profileService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
