import {Component, Injector, Input} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsShareEventModalContentComponent
} from '@events/components/events-share-event-modal/events-share-event-modal-content/events-share-event-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-share-event-modal',
    templateUrl: './events-share-event-modal.component.html',
    styleUrls: ['./events-share-event-modal.component.scss']
})
export class EventsShareEventModalComponent extends BaseModalComponent {

    @Input()
    event: Event;

    constructor(injector: Injector) {
        super(injector);
    }


    async openModal(event?: Event, params?) {
        this.setModalData('event', event || this.event);
        await super.open(EventsShareEventModalContentComponent,"badge-details-modal");
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
