import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {BasePopoverContentComponent} from "@core/components/popover/base-popover-content.component";
@Component({
    selector: 'core-login-popover-content',
    templateUrl: './core-login-popover-content.component.html',
    styleUrls: ['./core-login-popover-content.component.scss']
})
export class CoreLoginPopoverContentComponent extends BasePopoverContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}

