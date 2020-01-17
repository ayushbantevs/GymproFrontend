import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsMesgComponent } from './contact-us-mesg.component';

describe('ContactUsMesgComponent', () => {
  let component: ContactUsMesgComponent;
  let fixture: ComponentFixture<ContactUsMesgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsMesgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsMesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
