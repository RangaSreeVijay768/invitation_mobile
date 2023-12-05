import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
    EVENTS_CREATE_EVENT_FREE_TICKET_FORM_LAYOUT, EVENTS_CREATE_EVENT_FREE_TICKET_FORM_MODEL, EVENTS_CREATE_EVENT_PAID_TICKET_FORM_LAYOUT,
    EVENTS_CREATE_EVENT_PAID_TICKET_FORM_MODEL
} from '@events/events.form.models';
import {EventsRequests} from '@events/events.models';
import CreateEventTicket = EventsRequests.CreateEventTicket;
import {EventsService} from '@events/events.service';
import {ModalResult} from '@core/app.models';
import Event = Events.Event;
import {Events} from '@core/core.models';

@Component({
    selector: 'events-create-event-free-ticket-form',
    templateUrl: './events-create-event-free-ticket-form.component.html',
    styleUrls: ['./events-create-event-free-ticket-form.component.scss']
})
export class EventsCreateEventFreeTicketFormComponent extends FormComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    formLayout = EVENTS_CREATE_EVENT_FREE_TICKET_FORM_LAYOUT;


    @Input()
    event: Event;

    free_with_rsvp_until_clicked = false;


    @Output()
    eventTicketCreated = new EventEmitter<boolean>();

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_CREATE_EVENT_FREE_TICKET_FORM_MODEL();
    }

    createRequestData(): CreateEventTicket.Request {
        const request = new CreateEventTicket.Request();
        request.ticket_type = 'FREE';
        request.available_ticket_quantity_status = 'ACCEPT';
        request.event = this.event.event_id;
        request.ticket_name = this.getInputModelValueAsString('ticket_name');
        request.ticket_description = this.getInputModelValueAsString('ticket_description');
        request.total_quantity = this.getInputModelValueAsNumber('total_quantity');
        request.available_quantity = this.getInputModelValueAsNumber('total_quantity');
        // request.sale_start_time = '2023-08-12T14:00:00+05:30';
        // request.sale_end_time = '2023-09-13T13:00:00+05:30';
        return request;
    }

    create_event_ticket_subscription$: Subscription;

    createEventTicket = (request: CreateEventTicket.Request) => {
        this.create_event_ticket_subscription$ = this.eventsService.createEventTicket(request)
            .subscribe(value => {
                this.eventTicketCreated.emit(true);
            });
    };

    setFreeWithRsvpUntil(){
        this.free_with_rsvp_until_clicked = !this.free_with_rsvp_until_clicked;
    }
}
