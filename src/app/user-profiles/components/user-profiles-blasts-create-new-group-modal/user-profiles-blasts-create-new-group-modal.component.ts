import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    UserProfilesBlastsCreateNewGroupModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-create-new-group-modal/user-profiles-blasts-create-new-group-modal-content/user-profiles-blasts-create-new-group-modal-content.component';

@Component({
    selector: 'user-profiles-blasts-create-new-group-modal',
    templateUrl: './user-profiles-blasts-create-new-group-modal.component.html',
    styleUrls: ['./user-profiles-blasts-create-new-group-modal.component.scss']
})
export class UserProfilesBlastsCreateNewGroupModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
      // tslint:disable-next-line:max-line-length
        super.open(UserProfilesBlastsCreateNewGroupModalContentComponent, "user-profile-view-for-others");
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
