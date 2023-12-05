import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetUserFollowByUserAccountComponent } from './user-profiles-get-user-follow-by-user-account.component';

describe('UserProfilesGetUserFollowByUserAccountComponent', () => {
  let component: UserProfilesGetUserFollowByUserAccountComponent;
  let fixture: ComponentFixture<UserProfilesGetUserFollowByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetUserFollowByUserAccountComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetUserFollowByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
