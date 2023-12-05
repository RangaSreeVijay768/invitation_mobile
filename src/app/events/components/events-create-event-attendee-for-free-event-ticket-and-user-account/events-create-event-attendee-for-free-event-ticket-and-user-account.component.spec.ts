import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
    EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent
} from './events-create-event-attendee-for-free-event-ticket-and-user-account.component';

describe('EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent', () => {
  let component: EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent;
  let fixture: ComponentFixture<EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
