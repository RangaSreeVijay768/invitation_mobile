import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsCreateEventFreeTicketModalContentComponent
} from '@events/components/events-create-event-free-ticket-modal/events-create-event-free-ticket-modal-content/events-create-event-free-ticket-modal-content.component';
import {Events} from '@core/core.models';

@Component({
    selector: 'events-create-event-free-ticket-modal',
    templateUrl: './events-create-event-free-ticket-modal.component.html',
    styleUrls: ['./events-create-event-free-ticket-modal.component.scss']
})
export class EventsCreateEventFreeTicketModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    openModal(params?) {
        console.log('event id in free ticket modal : ', this.event.event_id);
        this.setModalData('event', this.event);
        super.open(EventsCreateEventFreeTicketModalContentComponent,'events-create-event-free-ticket-modal' );
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
