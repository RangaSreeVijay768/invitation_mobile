import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateUserFollowComponent } from './user-profiles-create-user-follow.component';

describe('UserProfilesCreateUserFollowComponent', () => {
  let component: UserProfilesCreateUserFollowComponent;
  let fixture: ComponentFixture<UserProfilesCreateUserFollowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateUserFollowComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateUserFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
