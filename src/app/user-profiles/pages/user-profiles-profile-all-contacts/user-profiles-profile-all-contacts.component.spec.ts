import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesProfileAllContactsComponent } from './user-profiles-profile-all-contacts.component';

describe('UserProfilesProfileAllContactsComponent', () => {
  let component: UserProfilesProfileAllContactsComponent;
  let fixture: ComponentFixture<UserProfilesProfileAllContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesProfileAllContactsComponent]
    });
    fixture = TestBed.createComponent(UserProfilesProfileAllContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
