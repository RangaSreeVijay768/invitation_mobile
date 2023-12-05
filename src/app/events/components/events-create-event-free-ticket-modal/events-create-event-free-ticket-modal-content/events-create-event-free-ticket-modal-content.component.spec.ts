import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventFreeTicketModalContentComponent } from './events-create-event-free-ticket-modal-content.component';

describe('EventsCreateEventFreeTicketModalContentComponent', () => {
  let component: EventsCreateEventFreeTicketModalContentComponent;
  let fixture: ComponentFixture<EventsCreateEventFreeTicketModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventFreeTicketModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventFreeTicketModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
