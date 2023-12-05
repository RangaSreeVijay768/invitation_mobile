import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewEventInviteeDetailsModalComponent } from './events-view-event-invitee-details-modal.component';

describe('EventsViewEventInviteeDetailsModalComponent', () => {
  let component: EventsViewEventInviteeDetailsModalComponent;
  let fixture: ComponentFixture<EventsViewEventInviteeDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsViewEventInviteeDetailsModalComponent]
    });
    fixture = TestBed.createComponent(EventsViewEventInviteeDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
