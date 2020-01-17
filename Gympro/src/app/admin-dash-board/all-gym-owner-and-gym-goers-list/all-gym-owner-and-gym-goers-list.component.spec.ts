import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGymOwnerAndGymGoersListComponent } from './all-gym-owner-and-gym-goers-list.component';

describe('AllGymOwnerAndGymGoersListComponent', () => {
  let component: AllGymOwnerAndGymGoersListComponent;
  let fixture: ComponentFixture<AllGymOwnerAndGymGoersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGymOwnerAndGymGoersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGymOwnerAndGymGoersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
