import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyCreatedEventsUpcomingEventsPageComponent } from './events-my-created-events-upcoming-events-page.component';

describe('EventsMyCreatedEventsUpcomingEventsPageComponent', () => {
  let component: EventsMyCreatedEventsUpcomingEventsPageComponent;
  let fixture: ComponentFixture<EventsMyCreatedEventsUpcomingEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyCreatedEventsUpcomingEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyCreatedEventsUpcomingEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
