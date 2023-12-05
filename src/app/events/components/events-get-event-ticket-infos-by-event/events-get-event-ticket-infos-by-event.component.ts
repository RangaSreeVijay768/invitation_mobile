import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import {CommonsService} from "@core/commons.service";
import EventTicketInfo = Events.EventTicketInfo;
import GetEventTicketInfosByEvent = EventsRequests.GetEventTicketInfosByEvent;
import Event = Events.Event;
import {Subscription} from "rxjs";

@Component({
    selector: 'events-get-event-ticket-infos-by-event',
    templateUrl: './events-get-event-ticket-infos-by-event.component.html',
    styleUrls: ['./events-get-event-ticket-infos-by-event.component.scss']
})
export class EventsGetEventTicketInfosByEventComponent extends SortedPaginatedBaseComponent {

    @Input()
    event: Event;

    event_ticket_infos: EventTicketInfo[];

    @Output()
    eventTicketInfosReceived = new EventEmitter<EventTicketInfo[]>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getEventTicketInfosByEvent(this.createRequestData());
    }

    createRequestData(event_id?: string, first?: number, count?: number, column_name?: string,
                      column_order?: string): GetEventTicketInfosByEvent.Request {
        let request = new GetEventTicketInfosByEvent.Request();
        request.event = event_id || this.event.event_id;

        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }


    get_event_ticket_infos_by_event_subscription$: Subscription;

    getEventTicketInfosByEvent(request: GetEventTicketInfosByEvent.Request) {
        this.get_event_ticket_infos_by_event_subscription$ = this.eventsService.getEventTicketInfosByEvent(request)
            .pipe(CommonsService.deserializeMap(GetEventTicketInfosByEvent.Response))
            .subscribe(value => {
                console.log(value);
                this.event_ticket_infos = value;
                this.eventTicketInfosReceived.emit(value);
            });
    }
}

@Component({
    selector: 'events-get-event-ticket-infos-by-event-no-template',
    templateUrl: './events-get-event-ticket-infos-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-ticket-infos-by-event.component.scss']
})
export class EventsGetEventTicketInfosByEventNoTemplateComponent extends EventsGetEventTicketInfosByEventComponent {
}
