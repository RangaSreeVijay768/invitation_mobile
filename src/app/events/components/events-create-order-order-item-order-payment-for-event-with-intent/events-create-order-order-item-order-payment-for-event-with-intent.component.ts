import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import SaleItem = Events.SaleItem;
import CreateOrderOrderItemOrderPaymentForEventWithIntent = EventsRequests.CreateOrderOrderItemOrderPaymentForEventWithIntent;
import OrderCompleteInfo = Events.OrderCompleteInfo;

@Component({
    selector: 'events-create-order-order-item-order-payment-for-event-with-intent',
    templateUrl: './events-create-order-order-item-order-payment-for-event-with-intent.component.html',
    styleUrls: ['./events-create-order-order-item-order-payment-for-event-with-intent.component.scss']
})
export class EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent extends BaseComponent {

    @Input()
    amount: number;
    @Input()
    quantity: number;
    @Input()
    saleItem: SaleItem;

    order_complete_info: OrderCompleteInfo;

    @Output()
    orderCompleteInfoReceived = new EventEmitter<OrderCompleteInfo>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(sale_item_id?: string): CreateOrderOrderItemOrderPaymentForEventWithIntent.Request {
        const request = new CreateOrderOrderItemOrderPaymentForEventWithIntent.Request();
        request.amount = this.amount;
        request.payment_gateway = 'STRIPE';
        request.quantity = this.quantity;
        request.sale_item = sale_item_id || this.saleItem.sale_item_id;
        return request;
    }

    create_order_order_item_order_payment_for_event_with_intent_subscription$: Subscription;

    createOrderOrderItemOrderPaymentForEventWithIntent(request: CreateOrderOrderItemOrderPaymentForEventWithIntent.Request) {
        this.create_order_order_item_order_payment_for_event_with_intent_subscription$ =
            this.eventsService.createOrderOrderItemOrderPaymentForEventWithIntent(request)
                .pipe(CommonsService.deserializeMap(CreateOrderOrderItemOrderPaymentForEventWithIntent.Response))
                .subscribe(value => {
                    this.order_complete_info = value;
                    this.orderCompleteInfoReceived.emit(value);
                });
    }
}

@Component({
    selector: 'events-create-order-order-item-order-payment-for-event-with-intent-no-template',
    templateUrl: './events-create-order-order-item-order-payment-for-event-with-intent-no-template.component.html',
    styleUrls: ['./events-create-order-order-item-order-payment-for-event-with-intent.component.scss']
})
export class EventsCreateOrderOrderItemOrderPaymentForEventWithIntentNoTemplateComponent
    extends EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent {
}
