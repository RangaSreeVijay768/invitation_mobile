import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventCreatePaidTicketModalContentComponent } from './events-create-event-create-paid-ticket-modal-content.component';

describe('EventsCreateEventCreatePaidTicketModalContentComponent', () => {
  let component: EventsCreateEventCreatePaidTicketModalContentComponent;
  let fixture: ComponentFixture<EventsCreateEventCreatePaidTicketModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventCreatePaidTicketModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventCreatePaidTicketModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
