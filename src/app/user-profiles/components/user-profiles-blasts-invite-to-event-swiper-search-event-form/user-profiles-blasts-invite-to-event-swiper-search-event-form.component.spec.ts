import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent } from './user-profiles-blasts-invite-to-event-swiper-search-event-form.component';

describe('UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent', () => {
  let component: UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent;
  let fixture: ComponentFixture<UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
