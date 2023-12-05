import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsInviteContactsToEventModalComponent } from './user-profiles-blasts-invite-contacts-to-event-modal.component';

describe('UserProfilesBlastsInviteContactsToEventModalComponent', () => {
  let component: UserProfilesBlastsInviteContactsToEventModalComponent;
  let fixture: ComponentFixture<UserProfilesBlastsInviteContactsToEventModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsInviteContactsToEventModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsInviteContactsToEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
