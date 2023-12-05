import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;
import EventTicket = Events.EventTicket;

@Component({
    selector: 'events-event-dashboard-ticket-details-promocodes-page',
    templateUrl: './events-event-dashboard-ticket-details-promocodes-page.component.html',
    styleUrls: ['./events-event-dashboard-ticket-details-promocodes-page.component.scss']
})
export class EventsEventDashboardTicketDetailsPromocodesPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

  eventInfo$: Observable<EventInfo>;
  eventInfo: EventInfo;

  event_promo_codes: Events.EventPromoCode[];
  eventTickets: EventTicket[];


  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo',  2);
    this.eventInfo$.subscribe(value => {
      this.eventInfo = value;
        console.log(this.eventInfo);
    });
  }


}
