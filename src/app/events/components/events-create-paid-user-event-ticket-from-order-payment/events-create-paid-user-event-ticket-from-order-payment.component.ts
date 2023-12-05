import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import {CommonsService} from "@core/commons.service";
import CreatePaidUserEventTicketFromOrderPayment = EventsRequests.CreatePaidUserEventTicketFromOrderPayment;
import OrderPayment = Events.OrderPayment;
import UserEventTicket = Events.UserEventTicket;

@Component({
    selector: 'events-create-paid-user-event-ticket-from-order-payment',
    templateUrl: './events-create-paid-user-event-ticket-from-order-payment.component.html',
    styleUrls: ['./events-create-paid-user-event-ticket-from-order-payment.component.scss']
})
export class EventsCreatePaidUserEventTicketFromOrderPaymentComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }


    @Input()
    orderPayment: OrderPayment;

    paid_user_event_ticket_created_subscription$: Subscription;

    @Output()
    paidUserEventTicketCreated = new EventEmitter<UserEventTicket>();

    initializeComponent() {
    }

    createRequestData(order_payment_id?: string): CreatePaidUserEventTicketFromOrderPayment.Request {
        const request = new CreatePaidUserEventTicketFromOrderPayment.Request();
        request.order_payment = order_payment_id || this.orderPayment.order_payment_id;
        return request;
    }

    createPaidUserEventTicketFromOrderPayment = (request: CreatePaidUserEventTicketFromOrderPayment.Request) => {
        this.paid_user_event_ticket_created_subscription$ =
            this.eventsService.createPaidUserEventTicketFromOrderPayment(request)
                .pipe(CommonsService.deserializeMap(CreatePaidUserEventTicketFromOrderPayment.Response))
                .subscribe(value => {
                    this.paidUserEventTicketCreated.emit(value);
                });
    };
}

@Component({
    selector: 'events-create-paid-user-event-ticket-from-order-payment-no-template',
    templateUrl: './events-create-paid-user-event-ticket-from-order-payment-no-template.component.html',
    styleUrls: ['./events-create-paid-user-event-ticket-from-order-payment.component.scss']
})

export class EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent
    extends EventsCreatePaidUserEventTicketFromOrderPaymentComponent {
}
