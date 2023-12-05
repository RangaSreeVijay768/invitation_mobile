import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserAttendedEventsModalComponent } from './user-profiles-user-attended-events-modal.component';

describe('UserProfilesUserAttendedEventsModalComponent', () => {
  let component: UserProfilesUserAttendedEventsModalComponent;
  let fixture: ComponentFixture<UserProfilesUserAttendedEventsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserAttendedEventsModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserAttendedEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
