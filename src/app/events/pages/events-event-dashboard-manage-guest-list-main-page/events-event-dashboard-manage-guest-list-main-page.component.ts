import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;
import EventAttendee = Events.EventAttendee;

@Component({
    selector: 'events-event-dashboard-manage-guest-list-main-page',
    templateUrl: './events-event-dashboard-manage-guest-list-main-page.component.html',
    styleUrls: ['./events-event-dashboard-manage-guest-list-main-page.component.scss']
})
export class EventsEventDashboardManageGuestListMainPageComponent extends PageComponent {

  selected_option = 'All guests';
  options = EventsConstants.MANAGE_GUEST_OPTIONS;

  constructor(injector: Injector) {
        super(injector);
    }

  eventInfo$: Observable<EventInfo>;
  eventInfo: EventInfo;


  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo',  1);
    this.eventInfo$.subscribe(value => {
      this.eventInfo = value;
    });
  }


}
