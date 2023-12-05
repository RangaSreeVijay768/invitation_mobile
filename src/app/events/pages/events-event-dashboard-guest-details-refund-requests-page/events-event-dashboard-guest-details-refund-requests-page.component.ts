import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from '@core/components/page.component';
import {EventsConstants} from "@events/events.constants";
import {Observable} from "@node-modules/rxjs";
import {Events} from "@core/core.models";
import EventAttendee = Events.EventAttendee;
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-event-dashboard-guest-details-refund-requests-page',
    templateUrl: './events-event-dashboard-guest-details-refund-requests-page.component.html',
    styleUrls: ['./events-event-dashboard-guest-details-refund-requests-page.component.scss']
})
export class EventsEventDashboardGuestDetailsRefundRequestsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    selected_option = 'Refund requests';
    options = EventsConstants.GUEST_OPTIONS;


    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;

    event_attendees: EventAttendee[];

    currentFilter = 'Ticket types';
    SortFilters = ['Most Recent', 'Ticket types', 'Alphabetical order'];
    changeSortFilter(selected) {
        this.currentFilter = selected;
    }

    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo',  2);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
        });
    }


}
