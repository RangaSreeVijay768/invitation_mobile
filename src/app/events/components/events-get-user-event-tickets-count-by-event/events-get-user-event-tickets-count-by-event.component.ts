import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import GetUserEventTicketsCountByEvent = EventsRequests.GetUserEventTicketsCountByEvent;

@Component({
  selector: 'events-get-user-event-tickets-count-by-event',
  templateUrl: './events-get-user-event-tickets-count-by-event.component.html',
  styleUrls: ['./events-get-user-event-tickets-count-by-event.component.scss']
})
export class EventsGetUserEventTicketsCountByEventComponent extends BaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  userEventTickets: unknown;

  initializeComponent() {
    this.getUserEventTicketsCountByEvent(this.createRequestData());
  }

  @Output()
  userEventTicketsCountByEventReceived = new EventEmitter<unknown>();

  createRequestData(): GetUserEventTicketsCountByEvent.Request {
    let request = new GetUserEventTicketsCountByEvent.Request();
    request.event_id = '85d5f6e9-a770-4872-9eeb-ffe0e0b07590';
    return request;
  }


  get_user_event_tickets_count_by_event_subscription$: Subscription;

  getUserEventTicketsCountByEvent(request: GetUserEventTicketsCountByEvent.Request) {
    this.get_user_event_tickets_count_by_event_subscription$ = this.eventsService.getUserEventTicketsCountByEvent(request)
      .pipe(CommonsService.convertToNumberPipe())
      .subscribe(value => {
        this.userEventTickets = value;
        this.userEventTicketsCountByEventReceived.emit(value);
      });
  }


}

@Component({
  selector: 'events-get-user-event-tickets-count-by-event-no-template',
  templateUrl: './events-get-user-event-tickets-count-by-event-no-template.component.html',
  styleUrls: ['./events-get-user-event-tickets-count-by-event.component.scss']
})
export class EventsGetUserEventTicketsCountByEventNoTemplateComponent extends EventsGetUserEventTicketsCountByEventComponent {
}
