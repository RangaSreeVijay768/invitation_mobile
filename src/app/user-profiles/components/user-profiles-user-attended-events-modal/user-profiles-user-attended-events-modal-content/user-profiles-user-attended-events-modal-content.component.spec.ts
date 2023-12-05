import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserAttendedEventsModalContentComponent } from './user-profiles-user-attended-events-modal-content.component';

describe('UserProfilesUserAttendedEventsModalContentComponent', () => {
  let component: UserProfilesUserAttendedEventsModalContentComponent;
  let fixture: ComponentFixture<UserProfilesUserAttendedEventsModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserAttendedEventsModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserAttendedEventsModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
