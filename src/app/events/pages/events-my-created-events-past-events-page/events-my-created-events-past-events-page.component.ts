import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from '@events/events.constants';

@Component({
    selector: 'events-my-created-events-past-events-page',
    templateUrl: './events-my-created-events-past-events-page.component.html',
    styleUrls: ['./events-my-created-events-past-events-page.component.scss']
})
export class EventsMyCreatedEventsPastEventsPageComponent extends PageComponent {

    current_time=CommonsService.getCurrentTimeAsDateTime();
    selected_sub_option = 'Past events';
    sub_options = EventsConstants.CREATED_OPTIONS;
    options = EventsConstants.EVENT_OPTIONS;
    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
