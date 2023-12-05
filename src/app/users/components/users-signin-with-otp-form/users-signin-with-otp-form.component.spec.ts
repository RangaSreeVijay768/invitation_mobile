import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSigninWithOtpFormComponent } from './users-signin-with-otp-form.component';

describe('UsersSigninWithOtpFormComponent', () => {
  let component: UsersSigninWithOtpFormComponent;
  let fixture: ComponentFixture<UsersSigninWithOtpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSigninWithOtpFormComponent]
    });
    fixture = TestBed.createComponent(UsersSigninWithOtpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
