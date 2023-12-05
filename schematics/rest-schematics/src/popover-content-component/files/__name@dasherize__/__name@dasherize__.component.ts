import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {BasePopoverContentComponent} from "@core/components/popover/base-popover-content.component";
@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends BasePopoverContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}

