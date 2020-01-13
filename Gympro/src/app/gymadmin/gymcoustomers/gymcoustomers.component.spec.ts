import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymcoustomersComponent } from './gymcoustomers.component';

describe('GymcoustomersComponent', () => {
  let component: GymcoustomersComponent;
  let fixture: ComponentFixture<GymcoustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymcoustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymcoustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
