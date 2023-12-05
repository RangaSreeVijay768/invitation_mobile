import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardCreatorDashboardPageComponent } from './events-event-dashboard-creator-dashboard-page.component';

describe('EventsEventDashboardCreatorDashboardPageComponent', () => {
  let component: EventsEventDashboardCreatorDashboardPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardCreatorDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardCreatorDashboardPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardCreatorDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
