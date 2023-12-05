import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInviteToEventInShareEventModalComponent } from './events-invite-to-event-in-share-event-modal.component';

describe('EventsInviteToEventInShareEventModalComponent', () => {
  let component: EventsInviteToEventInShareEventModalComponent;
  let fixture: ComponentFixture<EventsInviteToEventInShareEventModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInviteToEventInShareEventModalComponent]
    });
    fixture = TestBed.createComponent(EventsInviteToEventInShareEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
