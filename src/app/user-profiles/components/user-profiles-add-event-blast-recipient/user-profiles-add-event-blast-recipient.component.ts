import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';

import AddEventBlastRecipients = BlastsRequests.AddEventBlastRecipients;

import {Blasts} from '@core/core.models';
import BlastListItems = Blasts.BlastListItems;
import EventBlastRecipient = Blasts.EventBlastRecipient;
import {BlastsRequests} from '../../../blasts/blasts.models';
import {BlastsService} from '../../../blasts/blasts.service';

@Component({
  selector: 'user-profiles-add-event-blast-recipient',
  templateUrl: './user-profiles-add-event-blast-recipient.component.html',
  styleUrls: ['./user-profiles-add-event-blast-recipient.component.scss']
})
export class UserProfilesAddEventBlastRecipientComponent extends BaseComponent {

  constructor(protected blastService: BlastsService, injector: Injector) {
    super(injector);
  }

  add_event_blast_recipients_subscription$: Subscription;

  @Input()
  blast_list_items: BlastListItems[];

  @Input()
  event_blast_id: string;

  @Output()
  eventBlastAdded = new EventEmitter<EventBlastRecipient>();

  @Output()
  eventBlastCreated = new EventEmitter<boolean>();

  initializeComponent() {
  }

  createRequestData(blast_list_items?: string | string[]): AddEventBlastRecipients.Request {
    const request = new AddEventBlastRecipients.Request();
    const item_ids = blast_list_items ? CommonsService.convertToArray(blast_list_items) : CommonsService.convertToArray(this.blast_list_items).map(blast_list_item => blast_list_item.blast_list_item_id);
    request.blast_list_items = item_ids;
    request.event_blast = this.event_blast_id;
    return request;
  }

  addEventBlastRecipients = (request: AddEventBlastRecipients.Request) => {
    this.add_event_blast_recipients_subscription$ = this.blastService.addEventBlastRecipients(request)
      .pipe(CommonsService.deserializeMap(AddEventBlastRecipients.Response))
      .subscribe(value => {
        console.log('in add event blast recipients');
        this.eventBlastAdded.emit(value);
      });
  };
}

@Component({
  selector: 'user-profiles-add-event-blast-recipient-no-template',
  templateUrl: './user-profiles-add-event-blast-recipient-no-template.component.html',
  styleUrls: ['./user-profiles-add-event-blast-recipient.component.scss']
})
export class UserProfilesAddEventBlastRecipientNoTemplateComponent extends UserProfilesAddEventBlastRecipientComponent {
}
