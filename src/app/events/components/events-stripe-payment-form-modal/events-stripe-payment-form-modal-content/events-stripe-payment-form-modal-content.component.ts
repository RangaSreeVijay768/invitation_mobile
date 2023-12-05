import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {StripeService, StripeCardComponent} from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {ModalResult} from '@core/app.models';
import {combineLatest} from 'rxjs';


@Component({
  selector: 'events-stripe-payment-form-modal-content',
  templateUrl: './events-stripe-payment-form-modal-content.component.html',
  styleUrls: ['./events-stripe-payment-form-modal-content.component.scss']
})
export class EventsStripePaymentFormModalContentComponent extends BaseModalContentComponent {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  @Input()
  eventTicket: EventTicket;

  @Input()
  orderPaymentId: string;

  print() {
    console.log('received');
  }

  closeModal(modalResult?: ModalResult) {
    if (this.effects_observable_array.length) {
      combineLatest(this.effects_observable_array)
        .subscribe(values => {
          this.closeModalClicked.emit(modalResult);
        });
    } else {
      this.closeModalClicked.emit(modalResult);
    }
  }

  initializeComponent() {
    console.log('this is = ', this.orderPaymentId);
  }
}



