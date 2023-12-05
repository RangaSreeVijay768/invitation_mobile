import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsInviteToEventModalComponent } from './user-profiles-blasts-invite-to-event-modal.component';

describe('UserProfilesBlastsInviteToEventModalComponent', () => {
  let component: UserProfilesBlastsInviteToEventModalComponent;
  let fixture: ComponentFixture<UserProfilesBlastsInviteToEventModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsInviteToEventModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsInviteToEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
