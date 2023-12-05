import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInvitePastAttendeesInShareEventModalContentComponent } from './events-invite-past-attendees-in-share-event-modal-content.component';

describe('EventsInvitePastAttendeesInShareEventModalContentComponent', () => {
  let component: EventsInvitePastAttendeesInShareEventModalContentComponent;
  let fixture: ComponentFixture<EventsInvitePastAttendeesInShareEventModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInvitePastAttendeesInShareEventModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsInvitePastAttendeesInShareEventModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
