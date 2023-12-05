import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsGetAllEventsComponent} from '@events/components/events-get-all-events/events-get-all-events.component';
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
  selector: 'user-profiles-get-all-events',
  templateUrl: './user-profiles-get-all-events.component.html',
  styleUrls: ['./user-profiles-get-all-events.component.scss']
})
export class UserProfilesGetAllEventsComponent extends EventsGetAllEventsComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(eventsService, injector);
  }


}
