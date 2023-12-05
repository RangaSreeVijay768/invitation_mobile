import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BasePopoverComponent} from "@core/components/popover/base-popover.component";
import {
    EventsGetAllEventsFilterPopOverContentComponent
} from '@events/components/events-get-all-events-filter-pop-over/events-get-all-events-filter-pop-over-content/events-get-all-events-filter-pop-over-content.component';

@Component({
    selector: 'events-get-all-events-filter-pop-over',
    templateUrl: './events-get-all-events-filter-pop-over.component.html',
    styleUrls: ['./events-get-all-events-filter-pop-over.component.scss']
})
export class EventsGetAllEventsFilterPopOverComponent extends BasePopoverComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async presentPopover(event: Event, filter_type?: string): Promise<void> {
        this.setPopoverData('filter_type', filter_type);
       await super.presentPopover(EventsGetAllEventsFilterPopOverContentComponent,'events-get-all-events-filter-pop-over',event);
    }

    initializeComponent() {
    }



}
