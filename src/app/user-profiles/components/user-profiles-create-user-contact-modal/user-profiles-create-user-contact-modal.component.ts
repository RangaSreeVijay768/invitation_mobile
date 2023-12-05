import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  UserProfilesCreateUserContactModalContentComponent
} from '@user-profiles/components/user-profiles-create-user-contact-modal/user-profiles-create-user-contact-modal-content/user-profiles-create-user-contact-modal-content.component';

@Component({
    selector: 'user-profiles-create-user-contact-modal',
    templateUrl: './user-profiles-create-user-contact-modal.component.html',
    styleUrls: ['./user-profiles-create-user-contact-modal.component.scss']
})
export class UserProfilesCreateUserContactModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesCreateUserContactModalContentComponent, 'user-profiles-create-user-contact-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
