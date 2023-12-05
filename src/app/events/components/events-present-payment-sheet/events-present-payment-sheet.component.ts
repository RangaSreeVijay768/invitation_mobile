import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {PaymentSheetEventsEnum, Stripe} from "@node-modules/@capacitor-community/stripe";


@Component({
    selector: 'events-present-payment-sheet',
    templateUrl: './events-present-payment-sheet.component.html',
    styleUrls: ['./events-present-payment-sheet.component.scss']
})
export class EventsPresentPaymentSheetComponent extends BaseComponent {

    @Input()
    amount: number;

    payment_sheet_events_enum: PaymentSheetEventsEnum;

    @Output()
    paymentSheetEventsEnumReceived = new EventEmitter<PaymentSheetEventsEnum>();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    async presentPaymentSheet(paymentIntentClientSecret: string) {
        await Stripe.createPaymentSheet({paymentIntentClientSecret: paymentIntentClientSecret});
        const result = await Stripe.presentPaymentSheet();
        this.payment_sheet_events_enum = result.paymentResult;
        this.paymentSheetEventsEnumReceived.emit(this.payment_sheet_events_enum);
        console.log(result);
    }

}
