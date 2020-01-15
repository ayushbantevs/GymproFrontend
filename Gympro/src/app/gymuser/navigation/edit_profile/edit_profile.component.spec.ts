import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Edit_profileComponent } from "./edit_profile.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("Edit_profileComponent", () => {

  let fixture: ComponentFixture<Edit_profileComponent>;
  let component: Edit_profileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [Edit_profileComponent]
    });

    fixture = TestBed.createComponent(Edit_profileComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
