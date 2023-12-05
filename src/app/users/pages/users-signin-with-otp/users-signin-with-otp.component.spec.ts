import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSigninWithOtpComponent } from './users-signin-with-otp.component';

describe('UsersSigninWithOtpComponent', () => {
  let component: UsersSigninWithOtpComponent;
  let fixture: ComponentFixture<UsersSigninWithOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSigninWithOtpComponent]
    });
    fixture = TestBed.createComponent(UsersSigninWithOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
