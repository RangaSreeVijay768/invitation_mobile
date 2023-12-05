import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventTicketsByEventComponent } from './events-get-event-tickets-by-event.component';

describe('EventsGetEventTicketsByEventComponent', () => {
  let component: EventsGetEventTicketsByEventComponent;
  let fixture: ComponentFixture<EventsGetEventTicketsByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventTicketsByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventTicketsByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
