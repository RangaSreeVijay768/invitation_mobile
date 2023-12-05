import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesProfileEditComponent } from './user-profiles-profile-edit.component';

describe('UserProfilesProfileEditComponent', () => {
  let component: UserProfilesProfileEditComponent;
  let fixture: ComponentFixture<UserProfilesProfileEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesProfileEditComponent]
    });
    fixture = TestBed.createComponent(UserProfilesProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
