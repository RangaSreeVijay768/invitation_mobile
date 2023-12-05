import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    UserProfilesUserAttendedEventsModalContentComponent
} from '@user-profiles/components/user-profiles-user-attended-events-modal/user-profiles-user-attended-events-modal-content/user-profiles-user-attended-events-modal-content.component';
@Component({
    selector: 'user-profiles-user-attended-events-modal',
    templateUrl: './user-profiles-user-attended-events-modal.component.html',
    styleUrls: ['./user-profiles-user-attended-events-modal.component.scss']
})
export class UserProfilesUserAttendedEventsModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesUserAttendedEventsModalContentComponent, {windowClass:'user-profiles-user-attended-events-modal'});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
