import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesDeleteUserFollowComponent } from './user-profiles-delete-user-follow.component';

describe('UserProfilesDeleteUserFollowComponent', () => {
  let component: UserProfilesDeleteUserFollowComponent;
  let fixture: ComponentFixture<UserProfilesDeleteUserFollowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesDeleteUserFollowComponent]
    });
    fixture = TestBed.createComponent(UserProfilesDeleteUserFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
