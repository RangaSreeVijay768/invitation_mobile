import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {Events} from "@core/core.models";
import EventAttendee = Events.EventAttendee;
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import RemoveCoHostStatus = EventsRequests.RemoveCoHostStatus;

@Component({
    selector: 'events-remove-co-host-status',
    templateUrl: './events-remove-co-host-status.component.html',
    styleUrls: ['./events-remove-co-host-status.component.scss']
})
export class EventsRemoveCoHostStatusComponent extends BaseComponent {

    @Input()
    eventAttendee: EventAttendee;

    @Output()
    coHostStatusRemoved = new EventEmitter<boolean>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(event_attendee_id?: string): RemoveCoHostStatus.Request {
        const request = new RemoveCoHostStatus.Request();
        request.event_attendee = event_attendee_id || this.eventAttendee.event_attendee_id;
        return request;
    }

    remove_co_host_status_subscription$: Subscription;

    removeCoHostStatus(request: RemoveCoHostStatus.Request) {
        this.remove_co_host_status_subscription$ = this.eventsService.removeCoHostStatus(request)
            .subscribe(value => {
                this.coHostStatusRemoved.emit(true);
            });
    }
}

@Component({
    selector: 'events-remove-co-host-status-no-template',
    templateUrl: './events-remove-co-host-status-no-template.component.html',
    styleUrls: ['./events-remove-co-host-status.component.scss']
})
export class EventsRemoveCoHostStatusNoTemplateComponent extends EventsRemoveCoHostStatusComponent {
}
