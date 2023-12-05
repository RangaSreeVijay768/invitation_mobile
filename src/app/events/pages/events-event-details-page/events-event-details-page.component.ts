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
import {ActivatedRouteSnapshot} from "@angular/router";
import EventTicketInfo = Events.EventTicketInfo;

@Component({
    selector: 'events-event-details-page',
    templateUrl: './events-event-details-page.component.html',
    styleUrls: ['./events-event-details-page.component.scss']
})
export class EventsEventDetailsPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    event: Event;
    eventInvites: EventInvite[];
    eventTickets: EventTicket[];

    eventLocations: EventLocation[];

    eventInfo$: Observable<EventInfo>;
    event_info: EventInfo;

    event_ticket_info: EventTicketInfo[];

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


    navigateToInstagram(instagram_url?: string) {
        // this.router.navigate(['/']).then(() => {window.location.href = '' + instagram_url +''; });
    }

    getLoggedOutRouterUrl(activated_route?: ActivatedRouteSnapshot): string {
        // @ts-ignore
        const url = activated_route._routerState.url;

        let event_id= url.replace("/signedin/events/", "");
        console.log(event_id,url);
        event_id=event_id.slice(0,event_id.indexOf('/'));
        console.log(url,event_id);
        return `/basic/event/${event_id}`;
    }
}
