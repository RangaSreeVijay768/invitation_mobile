import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import CreateOrderOrderItemOrderPaymentForEvent = EventsRequests.CreateOrderOrderItemOrderPaymentForEvent;
import EventTicket = Events.EventTicket;
import OrderCompleteInfo = Events.OrderCompleteInfo;
import EventTicketInfo = Events.EventTicketInfo;

@Component({
    selector: 'events-create-order-item-payment-for-event',
    templateUrl: './events-create-order-item-payment-for-event.component.html',
    styleUrls: ['./events-create-order-item-payment-for-event.component.scss']
})
export class EventsCreateOrderItemPaymentForEventComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    order_item_order_payment_subscription$: Subscription;

    @Input()
    event: EventTicket;

    @Input()
    noOfTickets: number;

    @Input()
    amount: number;

    @Input()
    eventTicket: EventTicketInfo;

    order_complete_info: OrderCompleteInfo;

    @Output()
    orderCompleteInfoCreated = new EventEmitter<OrderCompleteInfo>();

    initializeComponent() {
    }

    createRequestData(sale_item_id?: string, event_id?: string): CreateOrderOrderItemOrderPaymentForEvent.Request {
        const request = new CreateOrderOrderItemOrderPaymentForEvent.Request();
        request.amount = this.amount;
        request.payment_gateway = 'STRIPE';
        request.quantity = this.noOfTickets;
        request.success_url = window.location + "/signedin/events/" + event_id + "/details/success";
        request.cancel_url = window.location + "/signedin/events/" + event_id + "/details/cancel";
        request.sale_item = this.eventTicket.event_ticket_sale_item.sale_item_id;
        return request;
    }

    createOrderOrderItemOrderPaymentForEvent = (request: CreateOrderOrderItemOrderPaymentForEvent.Request) => {
        // console.log(request);
        this.order_item_order_payment_subscription$ =
            this.eventsService.createOrderOrderItemOrderPaymentForEvent(request)
                .pipe(CommonsService.deserializeMap(CreateOrderOrderItemOrderPaymentForEvent.Response))
                .subscribe(value => {
                    this.orderCompleteInfoCreated.emit(value);
                });
    };

}

@Component({
    selector: 'events-create-order-item-payment-for-event-no-template',
    templateUrl: './events-create-order-item-payment-for-event-no-template.component.html',
    styleUrls: ['./events-create-order-item-payment-for-event.component.scss']
})
export class EventsCreateOrderItemPaymentForEventNoTemplateComponent
    extends EventsCreateOrderItemPaymentForEventComponent {
}
