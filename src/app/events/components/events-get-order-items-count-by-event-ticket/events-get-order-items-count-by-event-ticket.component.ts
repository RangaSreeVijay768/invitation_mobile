import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {DateTime} from 'luxon';
import {EventsRequests} from '@events/events.models';
import GetOrderItemsCountByEventTicket = EventsRequests.GetOrderItemsCountByEventTicket;
import {EventsService} from '@events/events.service';

@Component({
  selector: 'events-get-order-items-count-by-event-ticket',
  templateUrl: './events-get-order-items-count-by-event-ticket.component.html',
  styleUrls: ['./events-get-order-items-count-by-event-ticket.component.scss']
})
export class EventsGetOrderItemsCountByEventTicketComponent extends BaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    this.getOrderItemsCountByEventTicket(this.createRequestData());
  }

  orderItems: unknown;

  @Output()
  orderItemsCountByEventTicketReceived = new EventEmitter<unknown>();

  createRequestData(): GetOrderItemsCountByEventTicket.Request {
    let request = new GetOrderItemsCountByEventTicket.Request();
    request.event_ticket = 'baf97211-d818-416b-9782-4a027b4e938b';
    return request;
  }


  get_order_items_count_by_event_ticket_subscription$: Subscription;

  getOrderItemsCountByEventTicket(request: GetOrderItemsCountByEventTicket.Request) {
    this.get_order_items_count_by_event_ticket_subscription$ = this.eventsService.getOrderItemsCountByEventTicket(request)
      .pipe(CommonsService.convertToNumberPipe())
      .subscribe(value => {
        this.orderItems = value;
        this.orderItemsCountByEventTicketReceived.emit(value);
      });
  }
}

@Component({
  selector: 'events-get-order-items-count-by-event-ticket-no-template',
  templateUrl: './events-get-order-items-count-by-event-ticket-no-template.component.html',
  styleUrls: ['./events-get-order-items-count-by-event-ticket.component.scss']
})
export class EventsGetOrderItemsCountByEventTicketNoTemplateComponent extends EventsGetOrderItemsCountByEventTicketComponent {
}
