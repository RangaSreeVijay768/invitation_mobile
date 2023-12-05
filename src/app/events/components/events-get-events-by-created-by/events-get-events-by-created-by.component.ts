import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {DateTime} from 'luxon';
import GetEventsByCreatedBy = EventsRequests.GetEventsByCreatedBy;
import Event = Events.Event;

@Component({
    selector: 'events-get-events-by-created-by',
    templateUrl: './events-get-events-by-created-by.component.html',
    styleUrls: ['./events-get-events-by-created-by.component.scss']
})
export class EventsGetEventsByCreatedByComponent extends SortedPaginatedBaseComponent {

    @Input()
    status: string;
    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    events: Event[];

    @Output()
    eventsReceived = new EventEmitter<Event[]>();


    initializeComponent() {
        this.getEventsByCreatedBy(this.createRequestData());
    }

    createRequestData(status?: string, start_time?: DateTime, end_time?: DateTime, first?: number, count?: number,
                      column_name?: string, column_order?: string): GetEventsByCreatedBy.Request {
        let request = new GetEventsByCreatedBy.Request();
        request.status = status || this.status;
        request.start_time = start_time || this.startTime;
        request.end_time = end_time || this.endTime;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }


    get_events_by_created_by_subscription$: Subscription;

    getEventsByCreatedBy(request: GetEventsByCreatedBy.Request) {
        this.get_events_by_created_by_subscription$ = this.eventsService.getEventsByCreatedBy(request)
            .pipe(CommonsService.deserializeMap(GetEventsByCreatedBy.Response))
            .subscribe(value => {
                this.events = value;
                this.eventsReceived.emit(value);
            });
    }
}

@Component({
    selector: 'events-get-events-by-created-by-no-template',
    templateUrl: './events-get-events-by-created-by-no-template.component.html',
    styleUrls: ['./events-get-events-by-created-by.component.scss']
})
export class EventsGetEventsByCreatedByNoTemplateComponent extends EventsGetEventsByCreatedByComponent {
}


@Component({
    selector: 'events-get-events-by-created-by-scrolling',
    templateUrl: './events-get-events-by-created-by-scrolling.component.html',
    styleUrls: ['./events-get-events-by-created-by.component.scss']
})
export class EventsGetEventsByCreatedByScrollingComponent
    extends BaseInfiniteScrollComponent<EventsGetEventsByCreatedByComponent> {

    @Input()
    status: string;
    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;
    @Input()
    isPastEvent: boolean;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    performScrolling(): void {
        // const scrolling_component = this.scrollingComponent;
        // console.log('this is ', this.scrollingComponent);
        // scrolling_component.getEventsByCreatedBy(
        //     scrolling_component.createRequestData(undefined, undefined, undefined, this.currentCount,
        //         this.numberOfItems)
        // );
    }
}

@Component({
    selector: 'events-get-events-by-created-by-draft-events-scrolling',
    templateUrl: './events-get-events-by-created-by-draft-events-scrolling.component.html',
    styleUrls: ['./events-get-events-by-created-by.component.scss']
})
export class EventsGetEventsByCreatedByDraftEventsScrollingComponent
    extends EventsGetEventsByCreatedByScrollingComponent {

    navigateToEventDetailsPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }
}

