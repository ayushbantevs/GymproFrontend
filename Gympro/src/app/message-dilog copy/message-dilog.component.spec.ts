import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDilogComponent } from './message-dilog.component';

describe('MessageDilogComponent', () => {
  let component: MessageDilogComponent;
  let fixture: ComponentFixture<MessageDilogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDilogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
