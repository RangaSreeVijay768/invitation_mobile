import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Events} from '@core/core.models';
import {SearchRequests} from '../../../search/search.models';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import EventInfo = Events.EventInfo;
import SearchEventInfos = SearchRequests.SearchEventInfos;
import {SearchService} from '../../../search/search.service';

@Component({
    selector: 'events-search-event-infos',
    templateUrl: './events-search-event-infos.component.html',
    styleUrls: ['./events-search-event-infos.component.scss']
})
export class EventsSearchEventInfosComponent extends SortedPaginatedBaseComponent {

    constructor(protected searchService: SearchService, injector: Injector) {
        super(injector);
    }

    @Input()
    locationType: string;
    @Input()
    ticketType: string;
    @Input()
    eventStatus: string;

    event_infos: EventInfo[];

    @Output()
    eventInfosReceived = new EventEmitter<EventInfo[]>();


    search_event_infos_subscription$: Subscription;

    initializeComponent() {
        this.searchEventInfos(this.createRequestData());
    }

    createRequestData(location_type?: string, ticke_type?: string, event_status?: string, first?: number,
                      count?: number, column_name?: string,
                      column_order?: string): SearchEventInfos.Request {
        let request = new SearchEventInfos.Request();
        request.location_type = location_type || this.locationType;
        request.ticket_type = ticke_type || this.ticketType;
        request.event_status = event_status || this.eventStatus;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    searchEventInfos(request: SearchEventInfos.Request) {
        this.search_event_infos_subscription$ = this.searchService.searchEventInfos(request)
            .pipe(CommonsService.deserializeMap(SearchEventInfos.Response))
            .subscribe(value => {
                this.event_infos = value;
                this.eventInfosReceived.emit(value);
            });
    }

    updateFilters(location_type?: string, ticket_type?: string) {
        this.locationType = location_type;
        this.ticketType = ticket_type;
        this.searchEventInfos(this.createRequestData());
    }
}

@Component({
    selector: 'events-search-event-infos-no-template',
    templateUrl: './events-search-event-infos-no-template.component.html',
    styleUrls: ['./events-search-event-infos.component.scss']
})
export class EventsSearchEventInfosNoTemplateComponent extends EventsSearchEventInfosComponent {
}

@Component({
    selector: 'events-search-event-infos-scrolling',
    templateUrl: './events-search-event-infos-scrolling.component.html',
    styleUrls: ['./events-search-event-infos.component.scss']
})
export class EventsSearchEventInfosScrollingComponent
    extends BaseInfiniteScrollComponent<EventsSearchEventInfosComponent> {

    @Input()
    locationType: string;
    @Input()
    ticketType: string;
    @Input()
    eventStatus: string;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    performScrolling() {
        // this.scrollingComponent.searchEventInfos(
        //     this.scrollingComponent.createRequestData(undefined, undefined, undefined, this.currentCount,
        //         this.numberOfItems));
    }


}
