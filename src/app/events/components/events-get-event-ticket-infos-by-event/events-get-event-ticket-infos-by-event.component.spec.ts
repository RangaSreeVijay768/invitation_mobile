import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventTicketInfosByEventComponent } from './events-get-event-ticket-infos-by-event.component';

describe('EventsGetEventTicketInfosByEventComponent', () => {
  let component: EventsGetEventTicketInfosByEventComponent;
  let fixture: ComponentFixture<EventsGetEventTicketInfosByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventTicketInfosByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventTicketInfosByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
