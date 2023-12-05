import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUserSignupSliderComponent } from './users-user-signup-slider.component';

describe('UsersUserSignupSliderComponent', () => {
  let component: UsersUserSignupSliderComponent;
  let fixture: ComponentFixture<UsersUserSignupSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersUserSignupSliderComponent]
    });
    fixture = TestBed.createComponent(UsersUserSignupSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
