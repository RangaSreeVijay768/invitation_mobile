import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewEventAttendeeDetailsModalComponent } from './events-view-event-attendee-details-modal.component';

describe('EventsViewEventAttendeeDetailsModalComponent', () => {
  let component: EventsViewEventAttendeeDetailsModalComponent;
  let fixture: ComponentFixture<EventsViewEventAttendeeDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsViewEventAttendeeDetailsModalComponent]
    });
    fixture = TestBed.createComponent(EventsViewEventAttendeeDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
