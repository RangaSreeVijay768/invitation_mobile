import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BasePopoverComponent} from "@core/components/popover/base-popover.component";
import {
    CoreLoginPopoverContentComponent
} from '@core/components/core-login-popover/core-login-popover-content/core-login-popover-content.component';

@Component({
    selector: 'core-login-popover',
    templateUrl: './core-login-popover.component.html',
    styleUrls: ['./core-login-popover.component.scss']
})
export class CoreLoginPopoverComponent extends BasePopoverComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async presentPopover(event:Event): Promise<void> {
       await super.presentPopover(CoreLoginPopoverContentComponent,"menu-popover",event);
    }

    initializeComponent() {
    }



}
