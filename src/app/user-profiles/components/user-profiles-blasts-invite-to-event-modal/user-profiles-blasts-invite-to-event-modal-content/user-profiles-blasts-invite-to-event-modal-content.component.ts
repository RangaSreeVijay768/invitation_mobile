import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import Swiper from 'swiper';

import Event = Events.Event;
import {Blasts, Events} from '@core/core.models';
import BlastListItems = Blasts.BlastListItems;
import BlastList = Blasts.BlastList;

@Component({
  selector: 'user-profiles-blasts-invite-to-event-modal-content',
  templateUrl: './user-profiles-blasts-invite-to-event-modal-content.component.html',
  styleUrls: ['./user-profiles-blasts-invite-to-event-modal-content.component.scss']
})
export class UserProfilesBlastsInviteToEventModalContentComponent extends BaseModalContentComponent {

  constructor(injector: Injector) {
    super( injector);
  }

  events: Event[];

  @Input()
  blastList: BlastList;

  blastListItems: BlastListItems[];

  print() {
    console.log('these', this.blastListItems);
  }


  initializeComponent() {
  }


}

