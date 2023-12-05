import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {Subscription} from "rxjs";
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import EventAttendee = Events.EventAttendee;
import AddCoHostStatus = EventsRequests.AddCoHostStatus;

@Component({
    selector: 'events-add-co-host-status',
    templateUrl: './events-add-co-host-status.component.html',
    styleUrls: ['./events-add-co-host-status.component.scss']
})
export class EventsAddCoHostStatusComponent extends BaseComponent {

    @Input()
    eventAttendee: EventAttendee;

    @Output()
    coHostStatusAdded = new EventEmitter<boolean>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(event_attendee_id?: string): AddCoHostStatus.Request {
        const request = new AddCoHostStatus.Request();
        request.event_attendee = event_attendee_id || this.eventAttendee.event_attendee_id;
        return request;
    }

    add_co_host_status_subscription$: Subscription;

    addCoHostStatus(request: AddCoHostStatus.Request) {
        this.add_co_host_status_subscription$ = this.eventsService.addCoHostStatus(request)
            .subscribe(value => {
                this.coHostStatusAdded.emit(true);
            });
    }

}

@Component({
    selector: 'events-add-co-host-status-no-template',
    templateUrl: './events-add-co-host-status-no-template.component.html',
    styleUrls: ['./events-add-co-host-status.component.scss']
})
export class EventsAddCoHostStatusNoTemplateComponent extends EventsAddCoHostStatusComponent {
}
