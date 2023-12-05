import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from "@core/components/page.component";
import {truncate} from 'lodash';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import UserEventTicket = Events.UserEventTicket;

@Component({
    selector: 'events-event-dashboard-ticket-details-ticket-sales-page',
    templateUrl: './events-event-dashboard-ticket-details-ticket-sales-page.component.html',
    styleUrls: ['./events-event-dashboard-ticket-details-ticket-sales-page.component.scss']
})
export class EventsEventDashboardTicketDetailsTicketSalesPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

  user_event_tickets: UserEventTicket[];

  sale_sum: unknown;

  orderItemCount: unknown;
  userEventTicketCount: unknown;

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;

    initializeComponent() {
      this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
      this.eventInfo$.subscribe(value => {
        this.eventInfo = value;
        console.log('ei ', this.eventInfo.event);
      });
    }


  protected readonly truncate = truncate;
}
