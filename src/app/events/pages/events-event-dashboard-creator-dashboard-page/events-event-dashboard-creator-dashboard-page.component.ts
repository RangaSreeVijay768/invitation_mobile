import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import {truncate} from 'lodash';
import UserEventTicket = Events.UserEventTicket;
import {EventsConstants} from '@events/events.constants';

@Component({
    selector: 'events-event-dashboard-creator-dashboard-page',
    templateUrl: './events-event-dashboard-creator-dashboard-page.component.html',
    styleUrls: ['./events-event-dashboard-creator-dashboard-page.component.scss']
})
export class EventsEventDashboardCreatorDashboardPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    options = EventsConstants.DASHBOARD_OPTIONS;

    user_event_tickets: UserEventTicket[];

    sale_sum: unknown;

    orderItemCount: unknown;
    userEventTicketCount: unknown;
    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;


    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 1);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
        });
    }

    navigateToTicketSales() {
        this.router.navigateByUrl(`/signedin/events/eventdashboard/${this.eventInfo.event.event_id}/ticketdetails/ticketsales`);
    }

    navigateToEditEvent() {
        console.log(this.eventInfo.event.event_id);
        const eventId = this.eventInfo.event.event_id; // Replace this with the actual eventId
        this.router.navigate(['/signedin/events/', eventId, 'editevent']);
    }

    navigateToShareEvent(event_id?: string) {
        // this.router.navigateByUrl(`/signedin/events/${event_id}`);
        this.router.navigateByUrl(`/signedin/events/shareevent/${event_id}`);
    }

    protected readonly truncate = truncate;
}
