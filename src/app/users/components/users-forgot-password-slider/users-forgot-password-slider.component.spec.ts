import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersForgotPasswordSliderComponent } from './users-forgot-password-slider.component';

describe('UsersForgotPasswordSliderComponent', () => {
  let component: UsersForgotPasswordSliderComponent;
  let fixture: ComponentFixture<UsersForgotPasswordSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersForgotPasswordSliderComponent]
    });
    fixture = TestBed.createComponent(UsersForgotPasswordSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
