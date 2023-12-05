import {Component, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import Event = Events.Event;
import EventInvite = Events.EventInvite;
import EventLocation = Events.EventLocation;
import EventInfo = Events.EventInfo;
import EventTicket = Events.EventTicket;
import UserEventInfo = Events.UserEventInfo;

@Component({
    selector: 'event-details-page',
    templateUrl: './event-details-page.component.html',
    styleUrls: ['./event-details-page.component.scss']
})
export class EventDetailsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }


    event: Event;
    eventInvites: EventInvite[];
    eventTickets: EventTicket[];

    eventLocations: EventLocation[];

    eventInfo$: Observable<EventInfo>;
    event_info: EventInfo;

    userEventInfo$: Observable<UserEventInfo>;
    user_event_info: UserEventInfo;

    initializeComponent() {
        this.userEventInfo$ = this.getRouterParameterFromParentObservable('userEventInfo', 1);
        this.userEventInfo$.subscribe(value => {
            console.log(value);
            this.user_event_info = value;
            this.event_info = value.event_info;
            this.event = value.event_info.event;
        });
    }

    print(curr) {
        console.log(curr);
    }
}
