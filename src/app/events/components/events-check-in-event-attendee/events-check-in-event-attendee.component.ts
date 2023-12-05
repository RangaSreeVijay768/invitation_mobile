import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {Subscription} from "rxjs";
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import EventAttendee = Events.EventAttendee;
import CheckInEventAttendee = EventsRequests.CheckInEventAttendee;

@Component({
    selector: 'events-check-in-event-attendee',
    templateUrl: './events-check-in-event-attendee.component.html',
    styleUrls: ['./events-check-in-event-attendee.component.scss']
})
export class EventsCheckInEventAttendeeComponent extends BaseComponent {

    @Input()
    eventAttendee: EventAttendee;

    @Output()
    eventAttendeeCheckedIn = new EventEmitter<boolean>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.eventAttendeeCheckedIn.subscribe(value => {
            this.eventAttendee.check_in_status = 'ACTIVE';
        });
    }

    createRequestData(event_attendee_id?: string): CheckInEventAttendee.Request {
        const request = new CheckInEventAttendee.Request();
        request.event_attendee = event_attendee_id || this.eventAttendee.event_attendee_id;
        return request;
    }

    check_in_event_attendee_subscription$: Subscription;

    checkInEventAttendee(request: CheckInEventAttendee.Request) {
        this.check_in_event_attendee_subscription$ = this.eventsService.checkInEventAttendee(request)
            .subscribe(value => {
                this.eventAttendeeCheckedIn.emit(true);
            });
    }
}

@Component({
    selector: 'events-check-in-event-attendee-no-template',
    templateUrl: './events-check-in-event-attendee-no-template.component.html',
    styleUrls: ['./events-check-in-event-attendee.component.scss']
})
export class EventsCheckInEventAttendeeNoTemplateComponent extends EventsCheckInEventAttendeeComponent {
}
