import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import OrderPayment = Events.OrderPayment;
import UserEventTicket = Events.UserEventTicket;
import CreatePaidUserEventTicketFromOrderPaymentWithIntent = EventsRequests.CreatePaidUserEventTicketFromOrderPaymentWithIntent;

@Component({
    selector: 'events-create-paid-user-event-ticket-from-order-payment-with-intent',
    templateUrl: './events-create-paid-user-event-ticket-from-order-payment-with-intent.component.html',
    styleUrls: ['./events-create-paid-user-event-ticket-from-order-payment-with-intent.component.scss']
})
export class EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent extends BaseComponent {

    @Input()
    orderPayment: OrderPayment;

    user_event_ticket: UserEventTicket;

    @Output()
    userEventTicketReceived = new EventEmitter<UserEventTicket>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(order_payment_id?: string): CreatePaidUserEventTicketFromOrderPaymentWithIntent.Request {
        const request = new CreatePaidUserEventTicketFromOrderPaymentWithIntent.Request();
        request.order_payment = order_payment_id || this.orderPayment.order_payment_id;
        return request;
    }

    create_paid_user_event_ticket_from_order_payment_with_intent_subscription$: Subscription;

    createPaidUserEventTicketFromOrderPaymentWithIntent(request: CreatePaidUserEventTicketFromOrderPaymentWithIntent.Request) {
        this.create_paid_user_event_ticket_from_order_payment_with_intent_subscription$ =
            this.eventsService.createPaidUserEventTicketFromOrderPaymentWithIntent(request)
                .pipe(CommonsService.deserializeMap(CreatePaidUserEventTicketFromOrderPaymentWithIntent.Response))
                .subscribe(value => {
                    this.user_event_ticket = value;
                    this.userEventTicketReceived.emit(value);
                });
    }
}

@Component({
    selector: 'events-create-paid-user-event-ticket-from-order-payment-with-intent-no-template',
    templateUrl: './events-create-paid-user-event-ticket-from-order-payment-with-intent-no-template.component.html',
    styleUrls: ['./events-create-paid-user-event-ticket-from-order-payment-with-intent.component.scss']
})
export class EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentNoTemplateComponent
    extends EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent {
}
