import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'basic-verify-user-when-user-comes-from-link-modal-content',
    templateUrl: './basic-verify-user-when-user-comes-from-link-modal-content.component.html',
    styleUrls: ['./basic-verify-user-when-user-comes-from-link-modal-content.component.scss']
})
export class BasicVerifyUserWhenUserComesFromLinkModalContentComponent extends BaseModalContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Event;

    initializeComponent() {
    }

    protected readonly window = window;
}

