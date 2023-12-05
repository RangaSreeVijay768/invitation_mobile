import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsInviteToEventModalContentComponent } from './user-profiles-blasts-invite-to-event-modal-content.component';

describe('UserProfilesBlastsInviteToEventModalContentComponent', () => {
  let component: UserProfilesBlastsInviteToEventModalContentComponent;
  let fixture: ComponentFixture<UserProfilesBlastsInviteToEventModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsInviteToEventModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsInviteToEventModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
