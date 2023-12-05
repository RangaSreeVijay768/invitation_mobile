import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetUserFollowByFollowerAccountComponent } from './user-profiles-get-user-follow-by-follower-account.component';

describe('UserProfilesGetUserFollowByFollowerAccountComponent', () => {
  let component: UserProfilesGetUserFollowByFollowerAccountComponent;
  let fixture: ComponentFixture<UserProfilesGetUserFollowByFollowerAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetUserFollowByFollowerAccountComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetUserFollowByFollowerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
