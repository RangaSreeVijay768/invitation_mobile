import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import Swiper from 'swiper';
import {Events, Users} from '@core/core.models';
import EventTicket = Events.EventTicket;
import MessageDelivery = Users.MessageDelivery;
import UserEventTicket = Events.UserEventTicket;
import EventAttendee = Events.EventAttendee;
import EventTicketInfo = Events.EventTicketInfo;
import OrderCompleteInfo = Events.OrderCompleteInfo;
import {StripeService} from 'ngx-stripe';

@Component({
  selector: 'basic-verify-user-when-user-comes-from-link-swiper',
  templateUrl: './basic-verify-user-when-user-comes-from-link-swiper.component.html',
  styleUrls: ['./basic-verify-user-when-user-comes-from-link-swiper.component.scss']
})
export class BasicVerifyUserWhenUserComesFromLinkSwiperComponent extends BaseComponent {

  verified: boolean;

  @ViewChild('swiper')
  swiperEl: any;

  swiper: Swiper;

  @Output()
  userEventTicketCreated = new EventEmitter<UserEventTicket>;

  @Output()
  eventAttendeeReceived = new EventEmitter<EventAttendee[]>;

  @Output()
  closeModalReceived = new EventEmitter<boolean>();

  order_complete_info: OrderCompleteInfo;

  swiper_params = {
    slidesPerView: 3,
    pagination: {
      el: '#div-campaigns-pagination'
    }
  };

  @Input()
  event: Events.Event;

  initializeComponent() {
    const swiperEl = document.querySelector('swiper-container');
    // console.log(swiperEl, this.swiperParams);
    // Object.assign(swiperEl, this.swiperParams);
    this.swiperEl = swiperEl;
    // @ts-ignore
    this.swiperEl.initialize();
    setTimeout(() => {
      this.swiper = this.swiperEl.nativeElement.swiper;
      console.log(this.swiper);
    }, 1000);

    console.log('message delivery : ', this.messageDelivery);
    console.log('event in swiper is : ', this.event);
  }

  constructor(injector: Injector) {
    super(injector);
  }

  event_tickets: EventTicket[];

  selected_event_ticket: EventTicketInfo;

  event_ticket_infos: EventTicketInfo[];

  amount = 0;

  // tslint:disable-next-line:variable-name
  no_of_tickets = 0;

  messageDelivery: MessageDelivery;

  printEventT() {
    console.log('selected event ticket is ', this.selected_event_ticket);
  }

  increaseTickets() {
    this.no_of_tickets++;
    this.amount = this.amount + this.selected_event_ticket.event_ticket_sale_item.item_current_price;
    console.log('ST =', this.no_of_tickets);
  }

  decreaseTickets() {
    if (this.no_of_tickets > 0) {
      this.no_of_tickets--;
      this.amount = this.amount -  this.selected_event_ticket.event_ticket_sale_item.item_current_price;
    }
    console.log('decrease');
  }

  slideNext() {
    console.log('slide next');
    this.swiper.slideNext();
  }

  slidePrev(){
    this.swiper.slidePrev();
  }

  closeModel(){
    this.closeModalReceived.emit(true);
  }

  getClientSecretFromOrderCompleteInfo(order_complete_info: OrderCompleteInfo): string {
    const order_payment = order_complete_info.order_payment;
    const json = order_payment.payment_gateway_data_json_string;
    const parsed_json = JSON.parse(json);
    return parsed_json['client_secret'];
  }
}

