import {Component, Injector} from "@angular/core";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
import {CommonsService} from "@core/commons.service";
import {EventsConstants} from '@events/events.constants';

@Component({
    selector: 'events-my-invited-events-upcoming-events',
    templateUrl: './events-my-invited-events-upcoming-events.component.html',
    styleUrls: ['./events-my-invited-events-upcoming-events.component.scss']
})
export class EventsMyInvitedEventsUpcomingEventsComponent extends PageComponent {

    current_time = CommonsService.getCurrentTimeAsDateTime();

    selected_sub_option = 'Upcoming events';
    sub_options = EventsConstants.INVITED_OPTIONS;
    options = EventsConstants.EVENT_OPTIONS;
    constructor(injector: Injector) {
        super(injector);
    }

    // events: Event[];

    // eventsReceived: EventInfo[];
    eventInvites: EventInvite[];

    initializeComponent() {
    }

    navigateToEventDetailsPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }

}
