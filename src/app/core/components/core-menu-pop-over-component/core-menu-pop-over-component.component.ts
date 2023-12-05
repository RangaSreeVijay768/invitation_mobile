import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BasePopoverComponent} from '@core/components/popover/base-popover.component';
import {
    CoreMenuPopOverContentComponentComponent
} from '@core/components/core-menu-pop-over-component/core-menu-pop-over-content-component/core-menu-pop-over-content-component.component';

@Component({
    selector: 'core-menu-pop-over-component',
    templateUrl: './core-menu-pop-over-component.component.html',
    styleUrls: ['./core-menu-pop-over-component.component.scss']
})
export class CoreMenuPopOverComponentComponent extends BasePopoverComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async presentPopover(event: Event): Promise<void> {
        await super.presentPopover(CoreMenuPopOverContentComponentComponent, 'menu-popover', event);
    }

    initializeComponent() {
    }


}
