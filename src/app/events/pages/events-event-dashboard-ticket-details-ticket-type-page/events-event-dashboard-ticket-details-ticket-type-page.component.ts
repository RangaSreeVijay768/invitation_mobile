import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import EventTicket = Events.EventTicket;
import UserEventInfo = Events.UserEventInfo;
import EventTicketInfo = Events.EventTicketInfo;

@Component({
    selector: 'events-event-dashboard-ticket-details-ticket-type-page',
    templateUrl: './events-event-dashboard-ticket-details-ticket-type-page.component.html',
    styleUrls: ['./events-event-dashboard-ticket-details-ticket-type-page.component.scss']
})
export class EventsEventDashboardTicketDetailsTicketTypePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    event_ticket_infos: EventTicketInfo[];

    eventInfo$: Observable<EventInfo>;
    event_info: EventInfo;

    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
        this.eventInfo$.subscribe(value => {
            this.event_info = value;
            console.log(value);
        });
    }


    navigateToEventDetailsPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }

    navigateToEditEvent(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${this.event_info.event.event_id}/editevent`);
    }


}
