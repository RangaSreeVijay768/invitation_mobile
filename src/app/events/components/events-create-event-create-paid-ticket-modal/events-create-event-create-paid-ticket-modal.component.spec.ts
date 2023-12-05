import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventCreatePaidTicketModalComponent } from './events-create-event-create-paid-ticket-modal.component';

describe('EventsCreateEventCreatePaidTicketModalComponent', () => {
  let component: EventsCreateEventCreatePaidTicketModalComponent;
  let fixture: ComponentFixture<EventsCreateEventCreatePaidTicketModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventCreatePaidTicketModalComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventCreatePaidTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
