import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
import Event = Events.Event;


@Component({
    selector: 'events-view-event-invitee-details-modal-content',
    templateUrl: './events-view-event-invitee-details-modal-content.component.html',
    styleUrls: ['./events-view-event-invitee-details-modal-content.component.scss']
})
export class EventsViewEventInviteeDetailsModalContentComponent extends BaseModalContentComponent {


    event: Event;

    eventInvite: EventInvite;

    constructor( injector: Injector) {
        super( injector);
    }

    initializeComponent() {
    }

}

