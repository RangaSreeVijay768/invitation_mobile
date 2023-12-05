import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Events} from '@core/core.models';

@Component({
    selector: 'events-event-dashboard-promocodes-create-code-modal-content',
    templateUrl: './events-event-dashboard-promocodes-create-code-modal-content.component.html',
    styleUrls: ['./events-event-dashboard-promocodes-create-code-modal-content.component.scss']
})
export class EventsEventDashboardPromocodesCreateCodeModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector) {
        super( injector);
    }

    @Input()
    event: Events.Event;
    initializeComponent() {
    }

}

