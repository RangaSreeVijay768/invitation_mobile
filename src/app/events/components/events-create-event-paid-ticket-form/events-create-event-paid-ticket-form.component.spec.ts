import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventPaidTicketFormComponent } from './events-create-event-paid-ticket-form.component';

describe('EventsCreateEventPaidTicketFormComponent', () => {
  let component: EventsCreateEventPaidTicketFormComponent;
  let fixture: ComponentFixture<EventsCreateEventPaidTicketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventPaidTicketFormComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventPaidTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
