import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    UserProfilesBlastsInviteContactsToEventModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-invite-contacts-to-event-modal/user-profiles-blasts-invite-contacts-to-event-modal-content/user-profiles-blasts-invite-contacts-to-event-modal-content.component';

@Component({
    selector: 'user-profiles-blasts-invite-contacts-to-event-modal',
    templateUrl: './user-profiles-blasts-invite-contacts-to-event-modal.component.html',
    styleUrls: ['./user-profiles-blasts-invite-contacts-to-event-modal.component.scss']
})
export class UserProfilesBlastsInviteContactsToEventModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesBlastsInviteContactsToEventModalContentComponent, {windowClass: 'user-profiles-blasts-invite-contacts-to-event-modal', scrollable: true});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
