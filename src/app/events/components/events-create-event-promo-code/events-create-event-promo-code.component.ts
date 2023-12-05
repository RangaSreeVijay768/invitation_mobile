import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsRequests} from '@events/events.models';
import CreateEventPromoCode = EventsRequests.CreateEventPromoCode;
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';

@Component({
    selector: 'events-create-event-promo-code',
    templateUrl: './events-create-event-promo-code.component.html',
    styleUrls: ['./events-create-event-promo-code.component.scss']
})
export class EventsCreateEventPromoCodeComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;


    crete_event_promo_code_subscription$: Subscription;

    @Output()
    eventPromoCodeCreated = new EventEmitter<string>();
    initializeComponent() {
    }

  createRequestData(promoCode?: string): CreateEventPromoCode.Request {
    const request = new CreateEventPromoCode.Request();
    request.event = this.event.event_id;
    request.promo_code = promoCode;
    return request;
  }

  createEventPromoCode = (request: CreateEventPromoCode.Request) => {
    this.crete_event_promo_code_subscription$ = this.eventsService.createEventPromoCode(request)
      .pipe(CommonsService.deserializeMap(CreateEventPromoCode.Response))
      .subscribe(value => {
        this.eventPromoCodeCreated.emit(value);
      });
  };

}

@Component({
    selector: 'events-create-event-promo-code-no-template',
    templateUrl: './events-create-event-promo-code-no-template.component.html',
    styleUrls: ['./events-create-event-promo-code.component.scss']
})
export class EventsCreateEventPromoCodeNoTemplateComponent extends EventsCreateEventPromoCodeComponent
{
}
