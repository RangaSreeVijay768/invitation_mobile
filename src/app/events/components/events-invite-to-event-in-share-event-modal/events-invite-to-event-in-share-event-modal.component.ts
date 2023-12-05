import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsInviteToEventInShareEventModalContentComponent
} from '@events/components/events-invite-to-event-in-share-event-modal/events-invite-to-event-in-share-event-modal-content/events-invite-to-event-in-share-event-modal-content.component';
import {Events} from '@core/core.models';

@Component({
    selector: 'events-invite-to-event-in-share-event-modal',
    templateUrl: './events-invite-to-event-in-share-event-modal.component.html',
    styleUrls: ['./events-invite-to-event-in-share-event-modal.component.scss']
})
export class EventsInviteToEventInShareEventModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    async openModal() {
        this.setModalData('event', this.event);
       await super.open(EventsInviteToEventInShareEventModalContentComponent, 'manage-contact-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
        console.log('event in modal ', this.event);
    }

}
