import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  UserProfilesUserUpcomingEventsModalContentComponent
} from "@user-profiles/components/user-profiles-user-upcoming-events-modal/user-profiles-user-upcoming-events-modal-content/user-profiles-user-upcoming-events-modal-content.component";

@Component({
    selector: 'user-profiles-user-upcoming-events-modal',
    templateUrl: './user-profiles-user-upcoming-events-modal.component.html',
    styleUrls: ['./user-profiles-user-upcoming-events-modal.component.scss']
})
export class UserProfilesUserUpcomingEventsModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesUserUpcomingEventsModalContentComponent, {windowClass: 'user-profiles-user-upcoming-events-modal'});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
