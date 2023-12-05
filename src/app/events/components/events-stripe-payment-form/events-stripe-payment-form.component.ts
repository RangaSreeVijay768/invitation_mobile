import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {StripeService, StripeCardComponent} from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';


@Component({
    selector: 'events-stripe-payment-form',
    templateUrl: './events-stripe-payment-form.component.html',
    styleUrls: ['./events-stripe-payment-form.component.scss']
})
export class EventsStripePaymentFormComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  token_id: string;
  //
  // stripeTest: FormGroup;
  //
  // eventTicket: EventTicket;

  @Output()
  tokenCreated = new EventEmitter<string>();

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, private stripeService: StripeService) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        this.tokenCreated.emit(result.token.id);
        if (result.token) {
          console.log(result.token.id);
          this.token_id = result.token.id;
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
