import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInviteToEventInShareEventModalContentComponent } from './events-invite-to-event-in-share-event-modal-content.component';

describe('EventsInviteToEventInShareEventModalContentComponent', () => {
  let component: EventsInviteToEventInShareEventModalContentComponent;
  let fixture: ComponentFixture<EventsInviteToEventInShareEventModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInviteToEventInShareEventModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsInviteToEventInShareEventModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
