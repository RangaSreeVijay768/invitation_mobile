import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsEditTicketModalContentComponent
} from '@events/components/events-edit-ticket-modal/events-edit-ticket-modal-content/events-edit-ticket-modal-content.component';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;

@Component({
    selector: 'events-edit-ticket-modal',
    templateUrl: './events-edit-ticket-modal.component.html',
    styleUrls: ['./events-edit-ticket-modal.component.scss']
})
export class EventsEditTicketModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    eventTicket: EventTicket;


    openModal(params?) {
        super.open(EventsEditTicketModalContentComponent, {windowClass: 'events-edit-ticket-modal', scrollable: true});
        this.setModalData('event_ticket', this.eventTicket);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
      console.log('ticket edit');
      console.log(this.eventTicket);
    }

}
