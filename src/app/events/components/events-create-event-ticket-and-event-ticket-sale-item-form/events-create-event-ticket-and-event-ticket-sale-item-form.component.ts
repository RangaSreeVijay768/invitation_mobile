import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {EventsService} from '@events/events.service';
import {
  EVENTS_CREATE_EVENT_PAID_TICKET_FORM_LAYOUT,
  EVENTS_CREATE_EVENT_PAID_TICKET_FORM_MODEL,
  EVENTS_CREATE_EVENT_TICKET_AND_EVENT_TICKET_SALE_ITEM_FORM_LAYOUT, EVENTS_CREATE_EVENT_TICKET_AND_EVENT_TICKET_SALE_ITEM_FORM_MODEL
} from '@events/events.form.models';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import CreateEventTicketAndEventTicketSaleItem = EventsRequests.CreateEventTicketAndEventTicketSaleItem;
@Component({
    selector: 'events-create-event-ticket-and-event-ticket-sale-item-form',
    templateUrl: './events-create-event-ticket-and-event-ticket-sale-item-form.component.html',
    styleUrls: ['./events-create-event-ticket-and-event-ticket-sale-item-form.component.scss']
})
export class EventsCreateEventTicketAndEventTicketSaleItemFormComponent extends FormComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
      super(injector);
    }

    @Input()
    event: Events.Event;

    formLayout = EVENTS_CREATE_EVENT_TICKET_AND_EVENT_TICKET_SALE_ITEM_FORM_LAYOUT;

    @Output()
    eventTicketCreated = new EventEmitter<boolean>();

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    open_advanced_options = false;

    openAdvancedOptions() {
      this.open_advanced_options = !this.open_advanced_options;
    }

    getFormModel(): DynamicFormControlModel[] {
      return EVENTS_CREATE_EVENT_TICKET_AND_EVENT_TICKET_SALE_ITEM_FORM_MODEL();
    }

    createRequestData(): CreateEventTicketAndEventTicketSaleItem.Request {
      const request = new CreateEventTicketAndEventTicketSaleItem.Request();
      request.ticket_type = 'PAID';
      request.available_ticket_quantity_status = 'ACCEPT';
      request.event = this.event.event_id;
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
      request.item_current_price = this.getInputModelValueAsNumber('ticket_price');
      request.item_actual_price = this.getInputModelValueAsNumber('ticket_price');
      return request;
    }

    create_event_ticket_and_event_ticket_sale_item_subscription$: Subscription;

    createEventTicketAndEventTicketSaleItem = (request: CreateEventTicketAndEventTicketSaleItem.Request) => {
      this.create_event_ticket_and_event_ticket_sale_item_subscription$ = this.eventsService.createEventTicketAndEventTicketSaleItem(request)
        .subscribe(value => {
          this.eventTicketCreated.emit(true);
        });
    };
}
