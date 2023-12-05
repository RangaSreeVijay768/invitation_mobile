import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;
import EventAttendee = Events.EventAttendee;
import {EventsConstants} from "@events/events.constants";

@Component({
    selector: 'events-event-dashboard-guest-details-all-guests-page',
    templateUrl: './events-event-dashboard-guest-details-all-guests-page.component.html',
    styleUrls: ['./events-event-dashboard-guest-details-all-guests-page.component.scss']
})
export class EventsEventDashboardGuestDetailsAllGuestsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    selected_option = 'All guests';
    options = EventsConstants.GUEST_OPTIONS;


    eventInfo$: Observable<EventInfo>;
  eventInfo: EventInfo;

  event_attendees: EventAttendee[];

  currentFilter = 'Ticket types';
  SortFilters = ['Most Recent', 'Ticket types', 'Alphabetical order'];
  changeSortFilter(selected) {
    this.currentFilter = selected;
  }

  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo',  2);
    this.eventInfo$.subscribe(value => {
      this.eventInfo = value;
    });
  }


}
