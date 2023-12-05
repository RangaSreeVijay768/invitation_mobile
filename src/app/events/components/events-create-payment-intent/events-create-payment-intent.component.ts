import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {EventsRequests} from "@events/events.models";
import {OrdersService} from "@events/orders.service";
import CreatePaymentIntent = EventsRequests.CreatePaymentIntent;

@Component({
    selector: 'events-create-payment-intent',
    templateUrl: './events-create-payment-intent.component.html',
    styleUrls: ['./events-create-payment-intent.component.scss']
})
export class EventsCreatePaymentIntentComponent extends BaseComponent {

    @Input()
    amount: number;

    create_payment_intent_response: CreatePaymentIntent.Response;

    @Output()
    createPaymentIntentResponseReceived = new EventEmitter<CreatePaymentIntent.Response>();

    constructor(protected ordersService: OrdersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(amount?: number): CreatePaymentIntent.Request {
        const request = new CreatePaymentIntent.Request();
        request.amount = amount || this.amount;
        return request;
    }

    create_payment_intent_subscription$: Subscription;

    createPaymentIntent(request: CreatePaymentIntent.Request) {
        this.create_payment_intent_subscription$ = this.ordersService.createPaymentIntent(request)
            .pipe(CommonsService.deserializeMap(CreatePaymentIntent.Response))
            .subscribe(value => {
                this.create_payment_intent_response = value
                this.createPaymentIntentResponseReceived.emit(value);
            });
    }
}

@Component({
    selector: 'events-create-payment-intent-no-template',
    templateUrl: './events-create-payment-intent-no-template.component.html',
    styleUrls: ['./events-create-payment-intent.component.scss']
})
export class EventsCreatePaymentIntentNoTemplateComponent extends EventsCreatePaymentIntentComponent {
}
