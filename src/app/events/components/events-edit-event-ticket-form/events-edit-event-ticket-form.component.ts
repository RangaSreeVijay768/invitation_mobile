import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
    EVENTS_CREATE_EVENT_PAID_TICKET_FORM_LAYOUT,
    EVENTS_EDIT_EVENT_TICKET_FORM_LAYOUT,
    EVENTS_EDIT_EVENT_TICKET_FORM_MODEL
} from '@events/events.form.models';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;
import {EventsRequests} from '@events/events.models';
import UpdateEventTicket = EventsRequests.UpdateEventTicket;
import {EventsService} from '@events/events.service';

@Component({
    selector: 'events-edit-event-ticket-form',
    templateUrl: './events-edit-event-ticket-form.component.html',
    styleUrls: ['./events-edit-event-ticket-form.component.scss']
})
export class EventsEditEventTicketFormComponent extends FormComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event_ticket: EventTicket;
    formLayout = EVENTS_EDIT_EVENT_TICKET_FORM_LAYOUT;

    @Output()
    eventTicketUpdated = new EventEmitter<boolean>();

    initializeComponent() {
        console.log('form', this.event_ticket.sale_start_time.day);
    }

    afterInitializeComponent() {
        this.getInputModel('ticket_name').value = this.event_ticket.ticket_name;
        this.getInputModel('total_quantity').value = this.event_ticket.total_quantity;
        this.getInputModel('ticket_description').value = this.event_ticket.ticket_description;
        // this.getInputModel('sale_start_time').value = this.event_ticket.sale_start_time;
        // this.getInputModel('ticket_price').value = this.event_ticket.total_quantity;
        if (this.event_ticket.sale_start_time) {
          // @ts-ignore
          this.getInputModel('sale_start_date').value = {
            // @ts-ignore
            year: this.event_ticket.sale_start_time.year,
            month: this.event_ticket.sale_start_time.month,
            day: this.event_ticket.sale_start_time.day
          };
        }
        if (this.event_ticket.sale_end_time) {
        // @ts-ignore
        this.getInputModel('sale_end_date').value = {
          // @ts-ignore
          year: this.event_ticket.sale_end_time.year,
          month: this.event_ticket.sale_end_time.month,
          day: this.event_ticket.sale_end_time.day
        };
      }
        console.log(this.getInputModel('sale_start_date').value);
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_EDIT_EVENT_TICKET_FORM_MODEL();
    }
  open_advanced_options = false;

  openAdvancedOptions() {
    this.open_advanced_options = !this.open_advanced_options;
  }

    createRequestData(): UpdateEventTicket.Request {
        const request = new UpdateEventTicket.Request();
        request.event_ticket_id = this.event_ticket.event_ticket_id;
        request.ticket_type = 'FREE';
        request.available_ticket_quantity_status = 'ACCEPT';
        request.event = this.event_ticket.event.event_id;
        request.ticket_name = this.getInputModelValueAsString('ticket_name');
        request.ticket_description = this.getInputModelValueAsString('ticket_description');
        request.total_quantity = this.getInputModelValueAsNumber('total_quantity');
        request.available_quantity = this.getInputModelValueAsNumber('total_quantity');
        const start_time_value = this.getInputModel('sale_start_time').value;
        if (start_time_value) {
          request.sale_start_time = CommonsService.getDateTimeFromDate(this.getDateModelValue('sale_start_date'))
            // @ts-ignore
            .set({hour: start_time_value.hour, minute: start_time_value.minute});
        }
        const end_time_value = this.getInputModel('sale_end_time').value;
        if (end_time_value) {
          request.sale_end_time = CommonsService.getDateTimeFromDate(this.getDateModelValue('sale_end_date'))
            // @ts-ignore
            .set({hour: end_time_value.hour, minute: end_time_value.minute});
        }
        return request;
    }

    update_event_ticket_subscription$: Subscription;

    updateEventTicket = (request: UpdateEventTicket.Request) => {
        this.update_event_ticket_subscription$ = this.eventsService.updateEventTicket(request)
            .subscribe(value => {
                this.eventTicketUpdated.emit(true);
            });
    }
}
