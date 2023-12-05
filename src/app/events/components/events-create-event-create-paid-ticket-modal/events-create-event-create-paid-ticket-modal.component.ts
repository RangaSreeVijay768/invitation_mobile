import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsCreateEventCreatePaidTicketModalContentComponent
} from '@events/components/events-create-event-create-paid-ticket-modal/events-create-event-create-paid-ticket-modal-content/events-create-event-create-paid-ticket-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-create-event-create-paid-ticket-modal',
    templateUrl: './events-create-event-create-paid-ticket-modal.component.html',
    styleUrls: ['./events-create-event-create-paid-ticket-modal.component.scss']
})
export class EventsCreateEventCreatePaidTicketModalComponent extends BaseModalComponent {

    @Input()
    event: Event;

    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        this.setModalData('event', this.event);
        super.open(EventsCreateEventCreatePaidTicketModalContentComponent, 'events-create-paid-tickets-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
