import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymoffersComponent } from './gymoffers.component';

describe('GymoffersComponent', () => {
  let component: GymoffersComponent;
  let fixture: ComponentFixture<GymoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
