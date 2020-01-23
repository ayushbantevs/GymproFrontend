import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SankbartemmplateComponent } from './sankbartemmplate.component';

describe('SankbartemmplateComponent', () => {
  let component: SankbartemmplateComponent;
  let fixture: ComponentFixture<SankbartemmplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SankbartemmplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SankbartemmplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
