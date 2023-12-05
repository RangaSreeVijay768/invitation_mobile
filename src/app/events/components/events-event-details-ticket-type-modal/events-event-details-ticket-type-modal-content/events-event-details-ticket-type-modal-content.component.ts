import {Component, Injector, Input} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;
import EventTicket = Events.EventTicket;
import OrderCompleteInfo = Events.OrderCompleteInfo;
import EventTicketInfo = Events.EventTicketInfo;
import {$e} from "@node-modules/codelyzer/angular/styles/chars";

@Component({
    selector: 'events-event-details-ticket-type-modal-content',
    templateUrl: './events-event-details-ticket-type-modal-content.component.html',
    styleUrls: ['./events-event-details-ticket-type-modal-content.component.scss']
})
export class EventsEventDetailsTicketTypeModalContentComponent extends BaseModalContentComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    eventTickets: EventTicket[];
    event_ticket_infos:EventTicketInfo[];


    @Input()
    event: Event;

    selectedEventTicket: EventTicket;
    selected_event_ticket_info:EventTicketInfo;

    amount = 0;

    // tslint:disable-next-line:variable-name
    no_of_tickets = 0;

    order_complete_info:OrderCompleteInfo;

    increaseTickets() {
        this.no_of_tickets++;
        this.amount = this.amount + this.selected_event_ticket_info.event_ticket_sale_item.item_actual_price;
        console.log('ST =', this.selectedEventTicket);
    }

    decreaseTickets() {
        if (this.no_of_tickets > 0) {
            this.no_of_tickets--;
            this.amount = this.amount - this.selected_event_ticket_info.event_ticket_sale_item.item_actual_price;
        }
    }

    initializeComponent() {
        console.log(this.eventTickets);
    }

    print(curr) {
        console.log(curr);
    }

    getClientSecretFromOrderCompleteInfo(order_complete_info: OrderCompleteInfo): string {
        const order_payment = order_complete_info.order_payment;
        const json = order_payment.payment_gateway_data_json_string;
        const parsed_json = JSON.parse(json);
        return parsed_json['client_secret'];
    }

    protected readonly $e = $e;
}

