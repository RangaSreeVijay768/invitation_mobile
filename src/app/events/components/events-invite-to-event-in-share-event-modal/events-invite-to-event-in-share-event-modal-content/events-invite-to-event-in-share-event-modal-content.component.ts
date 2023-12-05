import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Events} from '@core/core.models';


@Component({
    selector: 'events-invite-to-event-in-share-event-modal-content',
    templateUrl: './events-invite-to-event-in-share-event-modal-content.component.html',
    styleUrls: ['./events-invite-to-event-in-share-event-modal-content.component.scss']
})
export class EventsInviteToEventInShareEventModalContentComponent extends BaseModalContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    initializeComponent() {
    }

}

