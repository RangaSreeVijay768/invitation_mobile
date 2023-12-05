import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    EventsStripePaymentFormModalContentComponent
} from '@events/components/events-stripe-payment-form-modal/events-stripe-payment-form-modal-content/events-stripe-payment-form-modal-content.component';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;
import OrderCompleteInfo = Events.OrderCompleteInfo;

@Component({
    selector: 'events-stripe-payment-form-modal',
    templateUrl: './events-stripe-payment-form-modal.component.html',
    styleUrls: ['./events-stripe-payment-form-modal.component.scss']
})
export class EventsStripePaymentFormModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    eventTicket: EventTicket;

    // @Input()
    // orderInfo: OrderCompleteInfo;


    openModal(order_payment_id?: string, params?) {
        console.log('order_payment_id', order_payment_id);
        this.setModalData('eventTicket', this.eventTicket);
        this.setModalData('orderPaymentId', order_payment_id);
        super.open(EventsStripePaymentFormModalContentComponent, {windowClass: 'events-stripe-payment-form-modal', scrollable: true});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
