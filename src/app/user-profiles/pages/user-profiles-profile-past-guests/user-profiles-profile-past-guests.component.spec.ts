import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesProfilePastGuestsComponent } from './user-profiles-profile-past-guests.component';

describe('UserProfilesProfilePastGuestsComponent', () => {
  let component: UserProfilesProfilePastGuestsComponent;
  let fixture: ComponentFixture<UserProfilesProfilePastGuestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesProfilePastGuestsComponent]
    });
    fixture = TestBed.createComponent(UserProfilesProfilePastGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
