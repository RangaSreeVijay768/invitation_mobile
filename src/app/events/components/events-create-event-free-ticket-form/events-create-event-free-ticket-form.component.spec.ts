import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventFreeTicketFormComponent } from './events-create-event-free-ticket-form.component';

describe('EventsCreateEventFreeTicketFormComponent', () => {
  let component: EventsCreateEventFreeTicketFormComponent;
  let fixture: ComponentFixture<EventsCreateEventFreeTicketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventFreeTicketFormComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventFreeTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
