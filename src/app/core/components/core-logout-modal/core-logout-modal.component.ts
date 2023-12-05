import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    CoreLogoutModalContentComponent
} from '@core/components/core-logout-modal/core-logout-modal-content/core-logout-modal-content.component';

@Component({
    selector: 'core-logout-modal',
    templateUrl: './core-logout-modal.component.html',
    styleUrls: ['./core-logout-modal.component.scss']
})
export class CoreLogoutModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async openModal() {
       await super.open(CoreLogoutModalContentComponent,'logout-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
