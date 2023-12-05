import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserUpcomingEventsModalContentComponent } from './user-profiles-user-upcoming-events-modal-content.component';

describe('UserProfilesUserUpcomingEventsModalContentComponent', () => {
  let component: UserProfilesUserUpcomingEventsModalContentComponent;
  let fixture: ComponentFixture<UserProfilesUserUpcomingEventsModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserUpcomingEventsModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserUpcomingEventsModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
