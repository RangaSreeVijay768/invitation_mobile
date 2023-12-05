import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsViewUserProfileDetailsModalContentComponent
} from "@events/components/events-view-user-profile-details-modal/events-view-user-profile-details-modal-content/events-view-user-profile-details-modal-content.component";
import Event = Events.Event;
import {Events, Users} from "@core/core.models";
import UserAccount = Users.UserAccount;
import EventInvite = Events.EventInvite;

@Component({
    selector: 'events-view-user-profile-details-modal',
    templateUrl: './events-view-user-profile-details-modal.component.html',
    styleUrls: ['./events-view-user-profile-details-modal.component.scss']
})
export class EventsViewUserProfileDetailsModalComponent extends BaseModalComponent {


  @Input()
  event: Event;

  @Input()
  userAccount;

  eventInvites: EventInvite[];
  @Output()
  eventInvitesReceived = new EventEmitter<EventInvite[]>();

  constructor(injector: Injector) {
        super(injector);
    }


    openModal() {
        super.open(EventsViewUserProfileDetailsModalContentComponent, {windowClass: 'user-profiles-user-profile-details-modal'});
        this.setModalData('event', this.event);
        this.setModalData('userAccount', this.userAccount);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}

@Component({
  selector: 'events-view-user-profile-details-modal-no-template',
  templateUrl: './events-view-user-profile-details-modal-no-template.component.html',
  styleUrls: ['./events-view-user-profile-details-modal.component.scss']
})
export class EventsViewUserProfileDetailsModalNoTemplateComponent extends EventsViewUserProfileDetailsModalComponent {

}
