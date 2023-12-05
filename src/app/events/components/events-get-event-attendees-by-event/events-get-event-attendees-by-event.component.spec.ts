import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventAttendeesByEventComponent } from './events-get-event-attendees-by-event.component';

describe('EventsGetEventAttendeesByEventComponent', () => {
  let component: EventsGetEventAttendeesByEventComponent;
  let fixture: ComponentFixture<EventsGetEventAttendeesByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventAttendeesByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventAttendeesByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
