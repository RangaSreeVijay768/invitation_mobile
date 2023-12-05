import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    UserProfilesEditGroupModalContentComponent
} from '@user-profiles/components/user-profiles-edit-group-modal/user-profiles-edit-group-modal-content/user-profiles-edit-group-modal-content.component';

@Component({
    selector: 'user-profiles-edit-group-modal',
    templateUrl: './user-profiles-edit-group-modal.component.html',
    styleUrls: ['./user-profiles-edit-group-modal.component.scss']
})
export class UserProfilesEditGroupModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async openModal() {
       await super.open(UserProfilesEditGroupModalContentComponent,'contacts-filter-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
