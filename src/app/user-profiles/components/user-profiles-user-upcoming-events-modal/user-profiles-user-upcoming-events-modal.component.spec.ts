import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserUpcomingEventsModalComponent } from './user-profiles-user-upcoming-events-modal.component';

describe('UserProfilesUserUpcomingEventsModalComponent', () => {
  let component: UserProfilesUserUpcomingEventsModalComponent;
  let fixture: ComponentFixture<UserProfilesUserUpcomingEventsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserUpcomingEventsModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserUpcomingEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
