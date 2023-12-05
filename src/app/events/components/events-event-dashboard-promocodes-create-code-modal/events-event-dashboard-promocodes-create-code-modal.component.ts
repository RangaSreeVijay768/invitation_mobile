import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsEventDashboardPromocodesCreateCodeModalContentComponent
} from '@events/components/events-event-dashboard-promocodes-create-code-modal/events-event-dashboard-promocodes-create-code-modal-content/events-event-dashboard-promocodes-create-code-modal-content.component';

import {Events} from '@core/core.models';

@Component({
    selector: 'events-event-dashboard-promocodes-create-code-modal',
    templateUrl: './events-event-dashboard-promocodes-create-code-modal.component.html',
    styleUrls: ['./events-event-dashboard-promocodes-create-code-modal.component.scss']
})
export class EventsEventDashboardPromocodesCreateCodeModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;


    openModal(params?) {
        this.setModalData('event', this.event);
        super.open(EventsEventDashboardPromocodesCreateCodeModalContentComponent, 'events-event-dashboard-promocodes-create-code-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
