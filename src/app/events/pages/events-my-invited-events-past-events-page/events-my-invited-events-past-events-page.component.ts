import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {CommonsService} from "@core/commons.service";
import {EventsConstants} from '@events/events.constants';

@Component({
    selector: 'events-my-invited-events-past-events-page',
    templateUrl: './events-my-invited-events-past-events-page.component.html',
    styleUrls: ['./events-my-invited-events-past-events-page.component.scss']
})
export class EventsMyInvitedEventsPastEventsPageComponent extends PageComponent {

    current_time = CommonsService.getCurrentTimeAsDateTime();

    selected_sub_option = 'Past events';
    sub_options = EventsConstants.INVITED_OPTIONS;
    options = EventsConstants.EVENT_OPTIONS;
    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    navigateToEventDetailsPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }

}
