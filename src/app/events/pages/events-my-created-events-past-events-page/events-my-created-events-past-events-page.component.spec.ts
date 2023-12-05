import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyCreatedEventsPastEventsPageComponent } from './events-my-created-events-past-events-page.component';

describe('EventsMyCreatedEventsPastEventsPageComponent', () => {
  let component: EventsMyCreatedEventsPastEventsPageComponent;
  let fixture: ComponentFixture<EventsMyCreatedEventsPastEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyCreatedEventsPastEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyCreatedEventsPastEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
