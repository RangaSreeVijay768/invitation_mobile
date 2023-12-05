import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewEventInviteeDetailsModalContentComponent } from './events-view-event-invitee-details-modal-content.component';

describe('EventsViewEventInviteeDetailsModalContentComponent', () => {
  let component: EventsViewEventInviteeDetailsModalContentComponent;
  let fixture: ComponentFixture<EventsViewEventInviteeDetailsModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsViewEventInviteeDetailsModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsViewEventInviteeDetailsModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
