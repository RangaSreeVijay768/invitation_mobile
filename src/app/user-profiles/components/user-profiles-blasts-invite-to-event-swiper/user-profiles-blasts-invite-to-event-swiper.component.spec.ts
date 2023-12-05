import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsInviteToEventSwiperComponent } from './user-profiles-blasts-invite-to-event-swiper.component';

describe('UserProfilesBlastsInviteToEventSwiperComponent', () => {
  let component: UserProfilesBlastsInviteToEventSwiperComponent;
  let fixture: ComponentFixture<UserProfilesBlastsInviteToEventSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsInviteToEventSwiperComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsInviteToEventSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
