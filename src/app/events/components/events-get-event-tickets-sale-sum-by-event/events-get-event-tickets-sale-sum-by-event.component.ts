import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {DateTime} from 'luxon';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import GetEventTicketsSaleSumByEvent = EventsRequests.GetEventTicketsSaleSumByEvent;
import {Events} from '@core/core.models';

@Component({
    selector: 'events-get-event-tickets-sale-sum-by-event',
    templateUrl: './events-get-event-tickets-sale-sum-by-event.component.html',
    styleUrls: ['./events-get-event-tickets-sale-sum-by-event.component.scss']
})
export class EventsGetEventTicketsSaleSumByEventComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    sale_sum: unknown;

    @Output()
    saleSumReceived = new EventEmitter<unknown>;

    initializeComponent() {
      this.getEventTicketsSaleSumByEvent(this.createRequestData());
    }

    createRequestData(): GetEventTicketsSaleSumByEvent.Request {
      let request = new GetEventTicketsSaleSumByEvent.Request();
      request.event = this.event.event_id
      return request;
    }


    get_event_ticket_sale_sum_by_event_subscription$: Subscription;

    getEventTicketsSaleSumByEvent(request: GetEventTicketsSaleSumByEvent.Request) {
      this.get_event_ticket_sale_sum_by_event_subscription$ = this.eventsService.getEventTicketsSaleSumByEvent(request)
        .pipe(CommonsService.convertToNumberPipe())
        .subscribe(value => {
          this.sale_sum = value;
          this.saleSumReceived.emit(value);
          console.log('sale sum is ', this.sale_sum);
        });
    }

}

@Component({
    selector: 'events-get-event-tickets-sale-sum-by-event-no-template',
    templateUrl: './events-get-event-tickets-sale-sum-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-tickets-sale-sum-by-event.component.scss']
})
export class EventsGetEventTicketsSaleSumByEventNoTemplateComponent extends EventsGetEventTicketsSaleSumByEventComponent
{
}
