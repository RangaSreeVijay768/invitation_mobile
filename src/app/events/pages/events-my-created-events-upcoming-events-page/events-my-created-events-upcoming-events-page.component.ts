import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import Event = Events.Event;
import {Events} from "@core/core.models";
import {EventsConstants} from '@events/events.constants';

@Component({
    selector: 'events-my-created-events-upcoming-events-page',
    templateUrl: './events-my-created-events-upcoming-events-page.component.html',
    styleUrls: ['./events-my-created-events-upcoming-events-page.component.scss']
})
export class EventsMyCreatedEventsUpcomingEventsPageComponent extends PageComponent {

    current_time=CommonsService.getCurrentTimeAsDateTime();


    selected_sub_option = 'Upcoming events';
    sub_options = EventsConstants.CREATED_OPTIONS;
    options = EventsConstants.EVENT_OPTIONS;
    constructor(injector: Injector) {
        super(injector);
    }

    events: Event[];

    initializeComponent() {
    }


}

