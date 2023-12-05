import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetUserContactsByUserAccountComponent } from './user-profiles-get-user-contacts-by-user-account.component';

describe('UserProfilesGetUserContactsByUserAccountComponent', () => {
  let component: UserProfilesGetUserContactsByUserAccountComponent;
  let fixture: ComponentFixture<UserProfilesGetUserContactsByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetUserContactsByUserAccountComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetUserContactsByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
