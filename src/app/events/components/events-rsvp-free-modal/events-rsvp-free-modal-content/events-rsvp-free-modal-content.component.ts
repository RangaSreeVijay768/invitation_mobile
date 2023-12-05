import {Component, Injector, Input} from "@angular/core";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Events} from "@core/core.models";
import EventTicket = Events.EventTicket;

@Component({
    selector: 'events-rsvp-free-modal-content',
    templateUrl: './events-rsvp-free-modal-content.component.html',
    styleUrls: ['./events-rsvp-free-modal-content.component.scss']
})
export class EventsRsvpFreeModalContentComponent extends BaseModalContentComponent {

    @Input()
    eventTicket: EventTicket;

    constructor( injector: Injector) {
        super( injector);
    }

    initializeComponent() {
    }
    print(curr) {
        console.log(curr);
    }


    protected readonly closed = closed;
}

