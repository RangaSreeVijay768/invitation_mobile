import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSigninWithOtpSliderComponent } from './users-signin-with-otp-slider.component';

describe('UsersSigninWithOtpSliderComponent', () => {
  let component: UsersSigninWithOtpSliderComponent;
  let fixture: ComponentFixture<UsersSigninWithOtpSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSigninWithOtpSliderComponent]
    });
    fixture = TestBed.createComponent(UsersSigninWithOtpSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
