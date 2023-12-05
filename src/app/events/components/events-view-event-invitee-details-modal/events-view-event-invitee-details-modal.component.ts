import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsViewEventInviteeDetailsModalContentComponent
} from "@events/components/events-view-event-invitee-details-modal/events-view-event-invitee-details-modal-content/events-view-event-invitee-details-modal-content.component";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
import Event = Events.Event;


@Component({
    selector: 'events-view-event-invitee-details-modal',
    templateUrl: './events-view-event-invitee-details-modal.component.html',
    styleUrls: ['./events-view-event-invitee-details-modal.component.scss']
})
export class EventsViewEventInviteeDetailsModalComponent extends BaseModalComponent {


  @Input()
  event: Event;

  @Input()
  eventInvite;

  // eventInvites: EventInvite[];

  constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(EventsViewEventInviteeDetailsModalContentComponent, "user-profile-view-for-others");
        this.setModalData('event', this.event);
        this.setModalData('eventInvite', this.eventInvite);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
