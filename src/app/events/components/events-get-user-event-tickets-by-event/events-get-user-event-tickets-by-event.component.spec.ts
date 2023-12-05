import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetUserEventTicketsByEventComponent } from './events-get-user-event-tickets-by-event.component';

describe('EventsGetUserEventTicketsByEventComponent', () => {
  let component: EventsGetUserEventTicketsByEventComponent;
  let fixture: ComponentFixture<EventsGetUserEventTicketsByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetUserEventTicketsByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetUserEventTicketsByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
