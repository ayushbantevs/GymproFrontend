import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GymListComponent } from './gymList.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('GymListComponent', () => {

  let fixture: ComponentFixture<GymListComponent>;
  let component: GymListComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [GymListComponent]
    });

    fixture = TestBed.createComponent(GymListComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });

});
