import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersVerifyUserAccountVerificationLoginFormComponent } from './users-verify-user-account-verification-login-form.component';

describe('UsersVerifyUserAccountVerificationLoginFormComponent', () => {
  let component: UsersVerifyUserAccountVerificationLoginFormComponent;
  let fixture: ComponentFixture<UsersVerifyUserAccountVerificationLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersVerifyUserAccountVerificationLoginFormComponent]
    });
    fixture = TestBed.createComponent(UsersVerifyUserAccountVerificationLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
