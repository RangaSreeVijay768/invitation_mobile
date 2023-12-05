import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import UserEventTicket = Events.UserEventTicket;
import {EventsRequests} from '@events/events.models';
import GetUserEventTicketsByEvent = EventsRequests.GetUserEventTicketsByEvent;

@Component({
    selector: 'events-get-user-event-tickets-by-event',
    templateUrl: './events-get-user-event-tickets-by-event.component.html',
    styleUrls: ['./events-get-user-event-tickets-by-event.component.scss']
})
export class EventsGetUserEventTicketsByEventComponent extends SortedPaginatedBaseComponent {

    user_event_tickets: UserEventTicket[];

    @Input()
    event: Events.Event;

    @Output()
    userEventTicketsReceived = new EventEmitter<UserEventTicket[]>();

    constructor(protected eventsService: EventsService, injector: Injector) {
      super(injector);
    }

    initializeComponent() {
      this.getUserEventTicketsByEvent(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string,
                      column_order?: string): GetUserEventTicketsByEvent.Request {
      let request = new GetUserEventTicketsByEvent.Request();
      // request = this.setLimits(request, first, count);
      // request = this.setColumnOrders(request, column_name, column_order);
      request.event = this.event.event_id;
      return request;
    }


    get_user_event_tickets_by_event_subscription$: Subscription;

    getUserEventTicketsByEvent(request: GetUserEventTicketsByEvent.Request) {
      this.get_user_event_tickets_by_event_subscription$ =
        this.eventsService.getUserEventTicketsByEvent(request)
          .pipe(CommonsService.deserializeMap(GetUserEventTicketsByEvent.Response))
          .subscribe(value => {
            this.user_event_tickets = value;
            console.log('ttttttttttttttt', this.user_event_tickets);
            this.userEventTicketsReceived.emit(value);
          });
    }

}

@Component({
    selector: 'events-get-user-event-tickets-by-event-no-template',
    templateUrl: './events-get-user-event-tickets-by-event-no-template.component.html',
    styleUrls: ['./events-get-user-event-tickets-by-event.component.scss']
})
export class EventsGetUserEventTicketsByEventNoTemplateComponent extends EventsGetUserEventTicketsByEventComponent
{
}
