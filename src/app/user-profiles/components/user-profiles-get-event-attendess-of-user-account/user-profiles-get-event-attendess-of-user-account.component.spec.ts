import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetEventAttendessOfUserAccountComponent } from './user-profiles-get-event-attendess-of-user-account.component';

describe('UserProfilesGetEventAttendessOfUserAccountComponent', () => {
  let component: UserProfilesGetEventAttendessOfUserAccountComponent;
  let fixture: ComponentFixture<UserProfilesGetEventAttendessOfUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetEventAttendessOfUserAccountComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetEventAttendessOfUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
