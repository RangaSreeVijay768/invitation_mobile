import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";
import {Observable} from "@node-modules/rxjs";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;
import EventAttendee = Events.EventAttendee;


@Component({
    selector: 'events-event-dashboard-manage-guest-list-inwaitlist',
    templateUrl: './events-event-dashboard-manage-guest-list-inwaitlist.component.html',
    styleUrls: ['./events-event-dashboard-manage-guest-list-inwaitlist.component.scss']
})
export class EventsEventDashboardManageGuestListInwaitlistComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    selected_option = 'All guests';
    options = EventsConstants.MANAGE_GUEST_OPTIONS;


    event_attendees: EventAttendee[];

    currentFilter = 'Ticket types';
    SortFilters = ['Most Recent', 'Ticket types', 'Alphabetical order'];

    changeSortFilter(selected) {
        this.currentFilter = selected;
    }

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;

    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
            console.log('event info in manage guest : ', this.eventInfo);
        });
    }


}
