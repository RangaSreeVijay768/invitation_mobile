import {Component, EventEmitter, Injector, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import GetEventAttendeesByEvent = EventsRequests.GetEventAttendeesByEvent;
import {EventsService} from '@events/events.service';
import Event = Events.Event;
import EventAttendee = Events.EventAttendee;

@Component({
    selector: 'events-get-event-attendees-by-event',
    templateUrl: './events-get-event-attendees-by-event.component.html',
    styleUrls: ['./events-get-event-attendees-by-event.component.scss']
})
export class EventsGetEventAttendeesByEventComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Event;

    event_attendees: EventAttendee[];

    @Output()
    eventAttendeesReceived = new EventEmitter<EventAttendee[]>();


    get_event_attendees_by_event_subscription$: Subscription;

    initializeComponent() {
        this.getEventAttendeesByEvent(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): GetEventAttendeesByEvent.Request {
        let request = new GetEventAttendeesByEvent.Request();
        request.event_id = this.event.event_id;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    getEventAttendeesByEvent(request: GetEventAttendeesByEvent.Request) {
        this.get_event_attendees_by_event_subscription$ = this.eventsService.getEventAttendeesByEvent(request)
            .pipe(CommonsService.deserializeMap(GetEventAttendeesByEvent.Response))
            .subscribe(value => {
                this.event_attendees = value;
                this.eventAttendeesReceived.emit(value);
            });
    }
}

@Component({
    selector: 'events-get-event-attendees-by-event-no-template',
    templateUrl: './events-get-event-attendees-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-attendees-by-event.component.scss']
})
export class EventsGetEventAttendeesByEventNoTemplateComponent extends EventsGetEventAttendeesByEventComponent {
}
