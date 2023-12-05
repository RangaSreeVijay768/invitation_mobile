import {Component, Input} from '@angular/core';
import {
  EventsViewEventInviteeDetailsModalContentComponent
} from '@events/components/events-view-event-invitee-details-modal/events-view-event-invitee-details-modal-content/events-view-event-invitee-details-modal-content.component';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
  selector: 'events-view-event-attendee-details-modal',
  templateUrl: './events-view-event-attendee-details-modal.component.html',
  styleUrls: ['./events-view-event-attendee-details-modal.component.scss']
})
export class EventsViewEventAttendeeDetailsModalComponent extends BaseModalComponent {
  @Input()
  event: Event;

  @Input()
  eventAttendee;
  openModal(params?) {
    super.open(EventsViewEventInviteeDetailsModalContentComponent, "user-profile-view-for-others");
    this.setModalData('event', this.event);
    this.setModalData('eventInvite', this.eventAttendee);
  }
  closeModal() {
  }

  performAction() {
  }

  initializeComponent() {
  }

}
