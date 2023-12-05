import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventCreatePaidTicketFormComponent } from './events-create-event-create-paid-ticket-form.component';

describe('EventsCreateEventCreatePaidTicketFormComponent', () => {
  let component: EventsCreateEventCreatePaidTicketFormComponent;
  let fixture: ComponentFixture<EventsCreateEventCreatePaidTicketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventCreatePaidTicketFormComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventCreatePaidTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
