import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent } from './user-profiles-blasts-invite-to-event-swiper-search-contact-form.component';

describe('UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent', () => {
  let component: UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent;
  let fixture: ComponentFixture<UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
