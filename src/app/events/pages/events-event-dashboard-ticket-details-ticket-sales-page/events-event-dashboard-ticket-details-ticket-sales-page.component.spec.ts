import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardTicketDetailsTicketSalesPageComponent } from './events-event-dashboard-ticket-details-ticket-sales-page.component';

describe('EventsEventDashboardTicketDetailsTicketSalesPageComponent', () => {
  let component: EventsEventDashboardTicketDetailsTicketSalesPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardTicketDetailsTicketSalesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardTicketDetailsTicketSalesPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardTicketDetailsTicketSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
