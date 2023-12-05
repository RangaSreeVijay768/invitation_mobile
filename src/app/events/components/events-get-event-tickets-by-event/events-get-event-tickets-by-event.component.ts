import {Component, EventEmitter, Injector, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Core, Events} from '@core/core.models';
// import {CoreDatatableComponent} from '@core/components/core-datatable.component';

import {EventsRequests} from '@events/events.models';
import GetEventTicketsByEvent = EventsRequests.GetEventTicketsByEvent;
import EventTicket = Events.EventTicket;
import Event = Events.Event;
import {EventsService} from '@events/events.service';

@Component({
    selector: 'events-get-event-tickets-by-event',
    templateUrl: './events-get-event-tickets-by-event.component.html',
    styleUrls: ['./events-get-event-tickets-by-event.component.scss']
})
export class EventsGetEventTicketsByEventComponent extends SortedPaginatedBaseComponent {


    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Event;

    eventTickets: EventTicket[];

    @Output()
    eventTicketsReceived = new EventEmitter<EventTicket[]>();


    get_event_tickets_by_event_subscription$: Subscription;

    initializeComponent() {
        this.getEventTicketsByEvent(this.createRequestData());
    }

    createRequestData(event?: Event, first?: number, count?: number, column_name?: string, column_order?: string): GetEventTicketsByEvent.Request {
        console.log('event is ', this.event);
        let request = new GetEventTicketsByEvent.Request();
        request.event_id = this.event.event_id || event.event_id  ;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    getEventTicketsByEvent(request: GetEventTicketsByEvent.Request) {
            this.get_event_tickets_by_event_subscription$ = this.eventsService.getEventTicketsByEvent(request)
            .pipe(CommonsService.deserializeMap(GetEventTicketsByEvent.Response))
            .subscribe(value => {
                this.eventTickets = value;
                this.eventTicketsReceived.emit(value);
            });
    }
}

@Component({
    selector: 'events-get-event-tickets-by-event-no-template',
    templateUrl: './events-get-event-tickets-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-tickets-by-event.component.scss']
})
export class EventsGetEventTicketsByEventNoTemplateComponent extends EventsGetEventTicketsByEventComponent {
}
