import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCheckInEventAttendeeComponent } from './events-check-in-event-attendee.component';

describe('EventsCheckInEventAttendeeComponent', () => {
  let component: EventsCheckInEventAttendeeComponent;
  let fixture: ComponentFixture<EventsCheckInEventAttendeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCheckInEventAttendeeComponent]
    });
    fixture = TestBed.createComponent(EventsCheckInEventAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
