import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import GetEventInfo = EventsRequests.GetEventInfo;
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-get-event-info',
    templateUrl: './events-get-event-info.component.html',
    styleUrls: ['./events-get-event-info.component.scss']
})
export class EventsGetEventInfoComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    eventInfo: EventInfo;
    @Output()
    eventInfoReceived = new EventEmitter<EventInfo>();

    initializeComponent() {
        this.getEventInfo(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): EventsRequests.GetEventInfo.Request {
        const request = new GetEventInfo.Request();
        request.event_id = 'd00e13bb-ab80-4ffe-89e7-6842b6791719';
        return request;
    }

    get_event_info_subscription$: Subscription;

    getEventInfo(request: GetEventInfo.Request) {
        this.get_event_info_subscription$ = this.eventsService.getEventInfo(request)
            .pipe(CommonsService.deserializeMap(GetEventInfo.Response))
            .subscribe(value => {
                this.eventInfo = value;
                this.eventInfoReceived.emit(value);
            });
    }

}

@Component({
    selector: 'events-get-event-info-no-template',
    templateUrl: './events-get-event-info-no-template.component.html',
    styleUrls: ['./events-get-event-info.component.scss']
})
export class EventsGetEventInfoNoTemplateComponent extends EventsGetEventInfoComponent
{
}
