import {Component, Injector, Input} from "@angular/core";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    EventsRsvpFreeModalContentComponent
} from "@events/components/events-rsvp-free-modal/events-rsvp-free-modal-content/events-rsvp-free-modal-content.component";
import {Events} from "@core/core.models";
import EventTicket = Events.EventTicket;

// import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-rsvp-free-modal',
    templateUrl: './events-rsvp-free-modal.component.html',
    styleUrls: ['./events-rsvp-free-modal.component.scss']
})
export class EventsRsvpFreeModalComponent extends BaseModalComponent {

    @Input()
    eventTicket: EventTicket;

    constructor(injector: Injector) {
        super(injector);
    }


    async openModal(event?: string, params?) {
        console.log('this =', event);
        this.setModalData('eventTicket', this.eventTicket);
        await super.open(EventsRsvpFreeModalContentComponent, 'rsvp-free-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
