import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaplistComponent } from './maplist.component';

describe('MaplistComponent', () => {
  let component: MaplistComponent;
  let fixture: ComponentFixture<MaplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
