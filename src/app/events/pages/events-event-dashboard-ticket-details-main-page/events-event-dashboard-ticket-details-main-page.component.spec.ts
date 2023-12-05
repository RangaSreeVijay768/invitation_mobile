import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardTicketDetailsMainPageComponent } from './events-event-dashboard-ticket-details-main-page.component';

describe('EventsEventDashboardTicketDetailsMainPageComponent', () => {
  let component: EventsEventDashboardTicketDetailsMainPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardTicketDetailsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardTicketDetailsMainPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardTicketDetailsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
