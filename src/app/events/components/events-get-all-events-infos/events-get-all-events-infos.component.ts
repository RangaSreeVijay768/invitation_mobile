import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import EventInfo = Events.EventInfo;
import GetAllEventInfos = EventsRequests.GetAllEventInfos;

@Component({
    selector: 'events-get-all-events-infos',
    templateUrl: './events-get-all-events-infos.component.html',
    styleUrls: ['./events-get-all-events-infos.component.scss']
})
export class EventsGetAllEventsInfosComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    eventInfos: EventInfo[];

    @Output()
    eventInfosReceived = new EventEmitter<EventInfo[]>();

    initializeComponent() {
        this.getAllEventInfos(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string,
                      column_order?: string): GetAllEventInfos.Request {
        let request = new GetAllEventInfos.Request();
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    get_all_event_infos_subscription$: Subscription;

    getAllEventInfos(request: GetAllEventInfos.Request) {
        this.get_all_event_infos_subscription$ = this.eventsService.getAllEventInfos(request)
            .pipe(CommonsService.deserializeMap(GetAllEventInfos.Response))
            .subscribe(value => {
                this.eventInfos = value;
                console.log(value);
                this.eventInfosReceived.emit(value);
            });
    }


}

@Component({
    selector: 'events-get-all-events-infos-no-template',
    templateUrl: './events-get-all-events-infos-no-template.component.html',
    styleUrls: ['./events-get-all-events-infos.component.scss']
})
export class EventsGetAllEventsInfosNoTemplateComponent extends EventsGetAllEventsInfosComponent {
}
