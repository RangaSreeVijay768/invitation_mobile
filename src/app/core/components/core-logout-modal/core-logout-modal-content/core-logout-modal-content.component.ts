import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';

@Component({
    selector: 'core-logout-modal-content',
    templateUrl: './core-logout-modal-content.component.html',
    styleUrls: ['./core-logout-modal-content.component.scss']
})
export class CoreLogoutModalContentComponent extends BaseModalContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    logOut() {
        this.authService.clearAll();
        this.closeModal({data: undefined, status: 'CLOSE'});
        // this.closePopover({data: undefined, status: ''});
        this.router.navigateByUrl('/basic/homepage');
    }


}

