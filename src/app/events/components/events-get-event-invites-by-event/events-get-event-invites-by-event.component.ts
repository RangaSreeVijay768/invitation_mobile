import {Component, EventEmitter, Injector, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import GetEventInvitesByEvent = EventsRequests.GetEventInvitesByEvent;
import Event = Events.Event;
import {EventsService} from '@events/events.service';
import EventInvite = Events.EventInvite;
// import EventInfo = Events.EventInfo;

@Component({
  selector: 'events-get-event-invites-by-event',
  templateUrl: './events-get-event-invites-by-event.component.html',
  styleUrls: ['./events-get-event-invites-by-event.component.scss']
})
export class EventsGetEventInvitesByEventComponent extends SortedPaginatedBaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Input()
  event: Event;

  eventInvites: EventInvite[];

  @Output()
  eventInvitesReceived = new EventEmitter<any>();

  initializeComponent() {
    this.getEventInvitesByEvent(this.createRequestData());
  }

  // tslint:disable-next-line:variable-name
  createRequestData(first?: number, count?: number, column_name?: string,
                    column_order?: string): GetEventInvitesByEvent.Request {
    let request = new GetEventInvitesByEvent.Request();
    request.event_id = this.event.event_id;
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }

  get_all_events_subscription$: Subscription;

  getEventInvitesByEvent(request: GetEventInvitesByEvent.Request) {
    this.get_all_events_subscription$ = this.eventsService.getEventInvitesByEvent(request)
      .pipe(CommonsService.deserializeMap(GetEventInvitesByEvent.Response))
      .subscribe(value => {
        this.eventInvites = value;
        this.eventInvitesReceived.emit(value);
      });
  }
}

@Component({
  selector: 'events-get-event-invites-by-event-no-template',
  templateUrl: './events-get-event-invites-by-event-no-template.component.html',
  styleUrls: ['./events-get-event-invites-by-event.component.scss']
})
export class EventsGetEventInvitesByEventNoTemplateComponent extends EventsGetEventInvitesByEventComponent {
}

// @Component({
//   selector: 'events-get-event-invites-by-event-datatable',
//   templateUrl: './events-get-event-invites-by-event-datatable.component.html',
//   styleUrls: ['./events-get-event-invites-by-event.component.scss']
// })
// export class EventsGetEventInvitesByEventDatatableComponent
//   extends CoreDatatableComponent<EventsGetEventInvitesByEventNoTemplateComponent, EventInvite> {
//
//
//   constructor(injector: Injector) {
//     super(injector);
//   }
//
//
//   initializeComponent() {
//     this.columns = [
//       // {name: 'Name', prop: 'wellness_benefit_name'},
//       // {name: 'Actions', prop: 'user_account', cellTemplate: this.actionsTemplate},
//     ];
//
//     // this.component.wellnessBenefitsReceived.subscribe(value => {
//     //     this.rows = value;
//     // })
//   }
//
//   makeAPICall(first: number, count: number) {
//     this.component.getEventInvitesByEvent(this.component.createRequestData(first, count));
//   }
// }
