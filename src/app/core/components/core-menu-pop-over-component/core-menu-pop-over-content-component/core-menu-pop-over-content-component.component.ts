import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {BasePopoverContentComponent} from '@core/components/popover/base-popover-content.component';

@Component({
    selector: 'core-menu-pop-over-content-component',
    templateUrl: './core-menu-pop-over-content-component.component.html',
    styleUrls: ['./core-menu-pop-over-content-component.component.scss']
})
export class CoreMenuPopOverContentComponentComponent extends BasePopoverContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    logOut() {
        this.authService.clearAll();
        this.closePopover({data: undefined, status: ''});
        this.router.navigateByUrl('/basic/signin');
    }

}

