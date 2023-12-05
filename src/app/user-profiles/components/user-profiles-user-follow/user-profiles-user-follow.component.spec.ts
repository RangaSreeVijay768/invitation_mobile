import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserFollowComponent } from './user-profiles-user-follow.component';

describe('UserProfilesUserFollowComponent', () => {
  let component: UserProfilesUserFollowComponent;
  let fixture: ComponentFixture<UserProfilesUserFollowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserFollowComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
