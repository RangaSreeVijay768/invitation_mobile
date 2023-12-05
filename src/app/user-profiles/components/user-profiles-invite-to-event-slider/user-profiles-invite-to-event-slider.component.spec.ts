import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesInviteToEventSliderComponent } from './user-profiles-invite-to-event-slider.component';

describe('UserProfilesInviteToEventSliderComponent', () => {
  let component: UserProfilesInviteToEventSliderComponent;
  let fixture: ComponentFixture<UserProfilesInviteToEventSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesInviteToEventSliderComponent]
    });
    fixture = TestBed.createComponent(UserProfilesInviteToEventSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
