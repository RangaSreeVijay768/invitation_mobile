import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsInvitePastAttendeesInShareEventModalContentComponent
} from '@events/components/events-invite-past-attendees-in-share-event-modal/events-invite-past-attendees-in-share-event-modal-content/events-invite-past-attendees-in-share-event-modal-content.component';
import {Events} from '@core/core.models';
import EventCategories = Events.Event;

@Component({
    selector: 'events-invite-past-attendees-in-share-event-modal',
    templateUrl: './events-invite-past-attendees-in-share-event-modal.component.html',
    styleUrls: ['./events-invite-past-attendees-in-share-event-modal.component.scss']
})
export class EventsInvitePastAttendeesInShareEventModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: EventCategories;


    async openModal(params?) {
        this.setModalData('event', this.event);
        await super.open(EventsInvitePastAttendeesInShareEventModalContentComponent, 'rsvp-free-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
