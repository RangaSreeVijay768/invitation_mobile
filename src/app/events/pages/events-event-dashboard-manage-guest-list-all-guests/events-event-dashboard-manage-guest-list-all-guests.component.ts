import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import EventAttendee = Events.EventAttendee;
import EventTicket = Events.EventTicket;
import {EventsConstants} from "@events/events.constants";

@Component({
  selector: 'events-event-dashboard-manage-guest-list-all-guests',
  templateUrl: './events-event-dashboard-manage-guest-list-all-guests.component.html',
  styleUrls: ['./events-event-dashboard-manage-guest-list-all-guests.component.scss']
})
export class EventsEventDashboardManageGuestListAllGuestsComponent extends PageComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  selected_option = 'All guests';
  options = EventsConstants.MANAGE_GUEST_OPTIONS;


  event_attendees: EventAttendee[];

  currentFilter = 'Ticket types';
  SortFilters = ['Most Recent', 'Ticket types', 'Alphabetical order'];

  changeSortFilter(selected) {
    this.currentFilter = selected;
  }

  eventInfo$: Observable<EventInfo>;
  eventInfo: EventInfo;

  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
    this.eventInfo$.subscribe(value => {
      this.eventInfo = value;
      console.log('event info in manage guest : ', this.eventInfo);
    });
  }


}
