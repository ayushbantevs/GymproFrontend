import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsonmapComponent } from './gymsonmap.component';

describe('GymsonmapComponent', () => {
  let component: GymsonmapComponent;
  let fixture: ComponentFixture<GymsonmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymsonmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymsonmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
