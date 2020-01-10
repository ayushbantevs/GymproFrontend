import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymadminComponent } from './gymadmin.component';

describe('GymadminComponent', () => {
  let component: GymadminComponent;
  let fixture: ComponentFixture<GymadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
