import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardTicketDetailsPromocodesPageComponent } from './events-event-dashboard-ticket-details-promocodes-page.component';

describe('EventsEventDashboardTicketDetailsPromocodesPageComponent', () => {
  let component: EventsEventDashboardTicketDetailsPromocodesPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardTicketDetailsPromocodesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardTicketDetailsPromocodesPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardTicketDetailsPromocodesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
