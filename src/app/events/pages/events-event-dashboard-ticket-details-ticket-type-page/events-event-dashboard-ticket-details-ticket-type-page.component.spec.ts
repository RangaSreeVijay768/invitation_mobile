import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardTicketDetailsTicketTypePageComponent } from './events-event-dashboard-ticket-details-ticket-type-page.component';

describe('EventsEventDashboardTicketDetailsTicketTypePageComponent', () => {
  let component: EventsEventDashboardTicketDetailsTicketTypePageComponent;
  let fixture: ComponentFixture<EventsEventDashboardTicketDetailsTicketTypePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardTicketDetailsTicketTypePageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardTicketDetailsTicketTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
