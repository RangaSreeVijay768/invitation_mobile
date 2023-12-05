import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetUserEventTicketsCountByEventComponent } from './events-get-user-event-tickets-count-by-event.component';

describe('EventsGetUserEventTicketsCountByEventComponent', () => {
  let component: EventsGetUserEventTicketsCountByEventComponent;
  let fixture: ComponentFixture<EventsGetUserEventTicketsCountByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetUserEventTicketsCountByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetUserEventTicketsCountByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
