import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
  selector: 'events-create-event-create-paid-ticket-modal-content',
  templateUrl: './events-create-event-create-paid-ticket-modal-content.component.html',
  styleUrls: ['./events-create-event-create-paid-ticket-modal-content.component.scss']
})
export class EventsCreateEventCreatePaidTicketModalContentComponent extends BaseModalContentComponent {

  @Input()
  event: Event;

  constructor( injector: Injector) {
    super(injector);
  }

  open_advanced_options = false;

  initializeComponent() {
  }

  openAdvancedOptions(){
    this.open_advanced_options = !this.open_advanced_options;
  }
}

