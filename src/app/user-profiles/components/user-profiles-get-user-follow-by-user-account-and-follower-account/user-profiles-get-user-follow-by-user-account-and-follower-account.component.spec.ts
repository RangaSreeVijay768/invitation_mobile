import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent } from './user-profiles-get-user-follow-by-user-account-and-follower-account.component';

describe('UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent', () => {
  let component: UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent;
  let fixture: ComponentFixture<UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
