import {Pipe, PipeTransform} from '@angular/core';
import {Events} from "@core/core.models";
import {CommonsService} from "@core/commons.service";
import EventTicket = Events.EventTicket;
import {DateTime} from 'luxon';
import EventTicketInfo = Events.EventTicketInfo;

@Pipe({
    name: 'eventsEventTicketInfosToMinPrice'
})
export class EventsEventTicketInfosToMinPricePipe implements PipeTransform {

    transform(value: EventTicketInfo[], ...args: any[]): number {
        value = CommonsService.convertToArray(value);
        return value.reduce((previousValue, currentValue, currentIndex, array) => {
            if (previousValue.event_ticket_sale_item?.item_current_price >
                currentValue.event_ticket_sale_item?.item_current_price) {
                return currentValue;
            }
            return previousValue;
        }).event_ticket_sale_item?.item_current_price || 0;
    }

}

@Pipe({
    name: 'eventsEventTicketInfosToMaxPrice'
})
export class EventsEventTicketInfosToMaxPricePipe implements PipeTransform {

    transform(value: EventTicketInfo[], ...args: any[]): number {
        value = CommonsService.convertToArray(value);
        return value.reduce((previousValue, currentValue, currentIndex, array) => {
            if (previousValue.event_ticket_sale_item?.item_current_price <
                currentValue.event_ticket_sale_item?.item_current_price) {
                return currentValue;
            }
            return previousValue;
        }).event_ticket_sale_item?.item_current_price || 0;
    }

}

@Pipe({
    name: 'eventsFilterEventTicketsByTicketType'
})
export class EventsFilterEventTicketsByTicketTypePipe implements PipeTransform {

    transform(value: EventTicket[], ticket_type: string, ...args: any[]): EventTicket[] {
        value = CommonsService.convertToArray(value);
        console.log(value);
        return value.filter(event_ticket => event_ticket.ticket_type === ticket_type);
    }

}

@Pipe({
    name: 'eventsEventTicketsToButtonText'
})
export class EventsEventTicketsToButtonTextPipe implements PipeTransform {

    events_filter_event_tickets_by_ticket_type_pipe = new EventsFilterEventTicketsByTicketTypePipe();

    transform(value: EventTicket[], ...args: any[]): string {
        value = CommonsService.convertToArray(value);
        const free_tickets = this.events_filter_event_tickets_by_ticket_type_pipe.transform(value, 'FREE');
        const paid_tickets = this.events_filter_event_tickets_by_ticket_type_pipe.transform(value, 'PAID');
        if (free_tickets?.length && paid_tickets?.length) {
            return 'See all Tickets';
        } else if (free_tickets?.length) {
            return 'RSVP to see who is going';
        } else if (paid_tickets?.length) {
            return 'Purchase tickets';
        }
    }

}

@Pipe({
    name: 'eventsEventTicketsTypesToMinPrice'
})
export class EventsEventTicketsTypesToMinPricePipe implements PipeTransform {

    transform(value: EventTicket[], ...args: any[]): number {

        return 5;
    }

}

@Pipe({
    name: 'eventsEventTicketsTypeToMaxPrice'
})
export class EventsEventTicketsTypeToMaxPricePipe implements PipeTransform {

    transform(value: EventTicket[], ...args: any[]): number {

        return 50;
    }

}


@Pipe({
    name: 'eventsEventTicketsToHumanReadable'
})
export class EventsEventTicketsToHumanReadablePipe implements PipeTransform {

    events_filter_event_tickets_by_ticket_type_pipe = new EventsFilterEventTicketsByTicketTypePipe();

    transform(value: EventTicket[], ...args: any[]): string {
        value = CommonsService.convertToArray(value);
        const free_tickets = this.events_filter_event_tickets_by_ticket_type_pipe.transform(value, 'FREE');
        const paid_tickets = this.events_filter_event_tickets_by_ticket_type_pipe.transform(value, 'PAID');
        if (free_tickets?.length && paid_tickets?.length) {
            return 'Both Free & Paid tickets';
        } else if (free_tickets?.length) {
            return 'Free';
        } else if (paid_tickets?.length) {
            return 'Paid';
        }
    }

}

@Pipe({
    name: 'eventsEventPromoCodeTypeToHumanReadable'
})
export class EventsEventPromoCodeTypeToHumanReadablePipe implements PipeTransform {

    MAP = {
        'DISCOUNT': 'Activates Discount',
        'FLAT': 'Show hidden ticket'
    };

    transform(value: string, ...args: any[]): string {
        return this.MAP[value];
    }

}

@Pipe({
    name: 'eventsInvitationPolicyToHumanReadable'
})
export class EventsInvitationPolicyToHumanReadablePipe implements PipeTransform {

    MAP = {
        'HOSTS': "Only hosts can invite to event",
        'HOSTS_AND_INVITEES': "Both hosts and invities can invite to event",
        'EVERYONE': "Every can invite to event"
    }

    transform(value: string, ...args: any[]): string {
        value = value || 'EVERYONE';
        return this.MAP[value];
    }

}
