import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-event-dashboard-ticket-details-main-page',
    templateUrl: './events-event-dashboard-ticket-details-main-page.component.html',
    styleUrls: ['./events-event-dashboard-ticket-details-main-page.component.scss']
})
export class EventsEventDashboardTicketDetailsMainPageComponent extends PageComponent {

  selected_option = 'Ticket type';
  options = EventsConstants.TICKET_DETAILS_OPTIONS;

  constructor(injector: Injector) {
        super(injector);
    }

    eventInfo$: Observable<EventInfo>;
    event_info: EventInfo;

    initializeComponent() {
        // this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo',1);
        // this.eventInfo$.subscribe(value => {
        //     this.event_info = value;
        // });
    }


}
