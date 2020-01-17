import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGymOwnersComponent } from './all-gym-owners.component';

describe('AllGymOwnersComponent', () => {
  let component: AllGymOwnersComponent;
  let fixture: ComponentFixture<AllGymOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGymOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGymOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
