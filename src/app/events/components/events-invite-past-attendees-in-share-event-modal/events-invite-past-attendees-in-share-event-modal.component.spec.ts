import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInvitePastAttendeesInShareEventModalComponent } from './events-invite-past-attendees-in-share-event-modal.component';

describe('EventsInvitePastAttendeesInShareEventModalComponent', () => {
  let component: EventsInvitePastAttendeesInShareEventModalComponent;
  let fixture: ComponentFixture<EventsInvitePastAttendeesInShareEventModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInvitePastAttendeesInShareEventModalComponent]
    });
    fixture = TestBed.createComponent(EventsInvitePastAttendeesInShareEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
