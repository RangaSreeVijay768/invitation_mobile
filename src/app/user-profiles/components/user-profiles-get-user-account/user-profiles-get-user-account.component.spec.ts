import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetUserAccountComponent } from './user-profiles-get-user-account.component';

describe('UserProfilesGetUserAccountComponent', () => {
  let component: UserProfilesGetUserAccountComponent;
  let fixture: ComponentFixture<UserProfilesGetUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetUserAccountComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
