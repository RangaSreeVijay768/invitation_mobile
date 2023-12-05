import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";

@Component({
    selector: 'user-profiles-edit-group-modal-content',
    templateUrl: './user-profiles-edit-group-modal-content.component.html',
    styleUrls: ['./user-profiles-edit-group-modal-content.component.scss']
})
export class UserProfilesEditGroupModalContentComponent extends BaseModalContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}

