import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
    BasicVerifyUserWhenUserComesFromLinkModalContentComponent
} from '@basic/components/basic-verify-user-when-user-comes-from-link-modal/basic-verify-user-when-user-comes-from-link-modal-content/basic-verify-user-when-user-comes-from-link-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'basic-verify-user-when-user-comes-from-link-modal',
    templateUrl: './basic-verify-user-when-user-comes-from-link-modal.component.html',
    styleUrls: ['./basic-verify-user-when-user-comes-from-link-modal.component.scss']
})
export class BasicVerifyUserWhenUserComesFromLinkModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Event;

    async openModal() {
        this.setModalData('event', this.event);
        await super.open(BasicVerifyUserWhenUserComesFromLinkModalContentComponent, 'rsvp-free-modal');
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
