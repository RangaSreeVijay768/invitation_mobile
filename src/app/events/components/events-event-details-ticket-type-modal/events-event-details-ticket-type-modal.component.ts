import {Component, Injector, Input} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsEventDetailsTicketTypeModalContentComponent
} from '@events/components/events-event-details-ticket-type-modal/events-event-details-ticket-type-modal-content/events-event-details-ticket-type-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-event-details-ticket-type-modal',
    templateUrl: './events-event-details-ticket-type-modal.component.html',
    styleUrls: ['./events-event-details-ticket-type-modal.component.scss']
})
export class EventsEventDetailsTicketTypeModalComponent extends BaseModalComponent {

    @Input()
    event: Event;


    constructor(injector: Injector) {
        super(injector);
    }


    async openModal(params?) {
        this.setModalData('event', this.event);
        await super.open(EventsEventDetailsTicketTypeModalContentComponent, 'rsvp-free-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
