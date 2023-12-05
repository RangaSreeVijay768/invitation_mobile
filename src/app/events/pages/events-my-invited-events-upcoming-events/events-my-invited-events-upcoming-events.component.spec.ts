import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyInvitedEventsUpcomingEventsComponent } from './events-my-invited-events-upcoming-events.component';

describe('EventsMyInvitedEventsUpcomingEventsComponent', () => {
  let component: EventsMyInvitedEventsUpcomingEventsComponent;
  let fixture: ComponentFixture<EventsMyInvitedEventsUpcomingEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyInvitedEventsUpcomingEventsComponent]
    });
    fixture = TestBed.createComponent(EventsMyInvitedEventsUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
