import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {DateTime} from 'luxon';
import GetAllEvents = EventsRequests.GetAllEvents;
// import EventInfo = Events.EventInfo;
import Event = Events.Event;

// import SortedPaginatedRequest = Core.SortedPaginatedRequest;

@Component({
    selector: 'events-get-all-events',
    templateUrl: './events-get-all-events.component.html',
    styleUrls: ['./events-get-all-events.component.scss']
})
export class EventsGetAllEventsComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }


    events: Event[];

    eventType: string = undefined;

    @Input()
    eventCategory: string;
    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;
    @Input()
    filterEventTitle: string;

    @Output()
    eventsReceived = new EventEmitter<Event[]>();

    @Output()
    eventsTypeReceived = new EventEmitter<string>();


    initializeComponent() {
        this.getAllEvents(this.createRequestData());
    }

    createRequestData(event_category?: string, filter_event_title?: string, start_time?: DateTime, end_time?: DateTime,
                      first?: number, count?: number, column_name?: string,
                      column_order?: string): GetAllEvents.Request {
        let request = new GetAllEvents.Request();
        request.start_time = start_time || this.startTime;
        request.end_time = end_time || this.endTime;
        request.event_category = event_category || this.eventCategory;
        request.filter_event_title = filter_event_title || this.filterEventTitle;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    get_all_events_subscription$: Subscription;

    getAllEvents(request: GetAllEvents.Request) {
        this.get_all_events_subscription$ = this.eventsService.getAllEvents(request)
            .pipe(CommonsService.deserializeMap(GetAllEvents.Response))
            .subscribe(value => {
                this.events = value;
                this.eventsReceived.emit(value);
                this.eventsTypeReceived.emit(this.eventCategory);
                console.log(this.events);
            });
    }


}

@Component({
    selector: 'events-get-all-events-no-template',
    templateUrl: './events-get-all-events-no-template.component.html',
    styleUrls: ['./events-get-all-events.component.scss']
})
export class EventsGetAllEventsNoTemplateComponent extends EventsGetAllEventsComponent {

}

@Component({
    selector: 'events-get-all-events-scrolling',
    templateUrl: './events-get-all-events-scrolling.component.html',
    styleUrls: ['./events-get-all-events.component.scss']
})

export class EventsGetAllEventsScrollingComponent extends BaseInfiniteScrollComponent<EventsGetAllEventsComponent> {

    @Input()
    eventCategory: string;
    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;
    @Input()
    filterEventTitle: string;


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    performScrolling(): void {
        // const scrolling_component = this.scrolling_omponent;
        console.log('this is ', this.scrolling_component);
        this.scrolling_component.getAllEvents(
            this.scrolling_component.createRequestData(undefined, undefined, undefined, undefined, this.currentCount,
                this.numberOfItems)
        );
    }

    refreshData(event_type?: string, start_time?: DateTime, end_time?: DateTime) {
        console.log(event_type, ' type', start_time, 'time ', end_time);
        this.resetScrolling();
        this.scrolling_component.getAllEvents(
            this.scrolling_component.createRequestData(event_type, undefined, start_time, end_time));
    }

}

@Component({
    selector: 'events-get-all-events-past-events-scrolling',
    templateUrl: './events-get-all-events-past-events-scrolling.component.html',
    styleUrls: ['./events-get-all-events.component.scss']
})
export class EventsGetAllEventsPastEventsScrollingComponent extends EventsGetAllEventsScrollingComponent {
}
