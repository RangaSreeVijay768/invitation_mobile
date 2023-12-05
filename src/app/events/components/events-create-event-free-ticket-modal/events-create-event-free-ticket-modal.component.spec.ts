import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventFreeTicketModalComponent } from './events-create-event-free-ticket-modal.component';

describe('EventsCreateEventFreeTicketModalComponent', () => {
  let component: EventsCreateEventFreeTicketModalComponent;
  let fixture: ComponentFixture<EventsCreateEventFreeTicketModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventFreeTicketModalComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventFreeTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
