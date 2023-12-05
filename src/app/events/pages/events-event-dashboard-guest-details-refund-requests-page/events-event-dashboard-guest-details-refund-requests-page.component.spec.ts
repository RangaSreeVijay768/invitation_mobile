import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardGuestDetailsRefundRequestsPageComponent } from './events-event-dashboard-guest-details-refund-requests-page.component';

describe('EventsEventDashboardGuestDetailsRefundRequestsPageComponent', () => {
  let component: EventsEventDashboardGuestDetailsRefundRequestsPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardGuestDetailsRefundRequestsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardGuestDetailsRefundRequestsPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardGuestDetailsRefundRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
