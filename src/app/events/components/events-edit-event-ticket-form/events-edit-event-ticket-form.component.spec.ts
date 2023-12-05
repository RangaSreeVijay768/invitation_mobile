import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEditEventTicketFormComponent } from './events-edit-event-ticket-form.component';

describe('EventsEditEventTicketFormComponent', () => {
  let component: EventsEditEventTicketFormComponent;
  let fixture: ComponentFixture<EventsEditEventTicketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEditEventTicketFormComponent]
    });
    fixture = TestBed.createComponent(EventsEditEventTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
