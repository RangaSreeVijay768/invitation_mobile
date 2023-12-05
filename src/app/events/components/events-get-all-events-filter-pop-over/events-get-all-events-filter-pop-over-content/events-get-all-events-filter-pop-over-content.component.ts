import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {BasePopoverContentComponent} from '@core/components/popover/base-popover-content.component';
import {DateTime} from 'luxon';

@Component({
    selector: 'events-get-all-events-filter-pop-over-content',
    templateUrl: './events-get-all-events-filter-pop-over-content.component.html',
    styleUrls: ['./events-get-all-events-filter-pop-over-content.component.scss']
})
export class EventsGetAllEventsFilterPopOverContentComponent extends BasePopoverContentComponent {

    filter_type: string;


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        console.log('filter type is ', this.filter_type);
    }

    protected readonly CommonsService = CommonsService;
    protected readonly DateTime = DateTime;
}

