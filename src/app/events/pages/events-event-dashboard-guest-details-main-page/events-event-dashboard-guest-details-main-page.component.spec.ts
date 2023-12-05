import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardGuestDetailsMainPageComponent } from './events-event-dashboard-guest-details-main-page.component';

describe('EventsEventDashboardGuestDetailsMainPageComponent', () => {
  let component: EventsEventDashboardGuestDetailsMainPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardGuestDetailsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardGuestDetailsMainPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardGuestDetailsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
