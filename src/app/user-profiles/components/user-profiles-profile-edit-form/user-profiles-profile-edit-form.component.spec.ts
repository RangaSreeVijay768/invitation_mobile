import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesProfileEditFormComponent } from './user-profiles-profile-edit-form.component';

describe('UserProfilesProfileEditFormComponent', () => {
  let component: UserProfilesProfileEditFormComponent;
  let fixture: ComponentFixture<UserProfilesProfileEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesProfileEditFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesProfileEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
