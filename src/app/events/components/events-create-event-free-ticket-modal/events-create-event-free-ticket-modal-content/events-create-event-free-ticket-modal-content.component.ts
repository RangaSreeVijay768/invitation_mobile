import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Events} from '@core/core.models';
import {ModalResult} from '@core/app.models';


@Component({
    selector: 'events-create-event-free-ticket-modal-content',
    templateUrl: './events-create-event-free-ticket-modal-content.component.html',
    styleUrls: ['./events-create-event-free-ticket-modal-content.component.scss']
})
export class EventsCreateEventFreeTicketModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    initializeComponent() {
      console.log(this.event , 'event');
    }

}

