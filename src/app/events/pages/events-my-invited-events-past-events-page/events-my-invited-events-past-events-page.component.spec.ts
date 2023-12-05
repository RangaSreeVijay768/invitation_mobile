import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyInvitedEventsPastEventsPageComponent } from './events-my-invited-events-past-events-page.component';

describe('EventsMyInvitedEventsPastEventsPageComponent', () => {
  let component: EventsMyInvitedEventsPastEventsPageComponent;
  let fixture: ComponentFixture<EventsMyInvitedEventsPastEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyInvitedEventsPastEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyInvitedEventsPastEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
