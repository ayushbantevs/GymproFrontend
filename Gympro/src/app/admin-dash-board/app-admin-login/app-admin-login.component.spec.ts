import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminLoginComponent } from './app-admin-login.component';

describe('AppAdminLoginComponent', () => {
  let component: AppAdminLoginComponent;
  let fixture: ComponentFixture<AppAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
