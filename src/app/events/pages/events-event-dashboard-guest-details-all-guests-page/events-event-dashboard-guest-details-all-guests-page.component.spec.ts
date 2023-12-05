import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardGuestDetailsAllGuestsPageComponent } from './events-event-dashboard-guest-details-all-guests-page.component';

describe('EventsEventDashboardGuestDetailsAllGuestsPageComponent', () => {
  let component: EventsEventDashboardGuestDetailsAllGuestsPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardGuestDetailsAllGuestsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardGuestDetailsAllGuestsPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardGuestDetailsAllGuestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
