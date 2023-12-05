import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardEventDetailsPageComponent } from './events-event-dashboard-event-details-page.component';

describe('EventsEventDashboardEventDetailsPageComponent', () => {
  let component: EventsEventDashboardEventDetailsPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardEventDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardEventDetailsPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardEventDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
