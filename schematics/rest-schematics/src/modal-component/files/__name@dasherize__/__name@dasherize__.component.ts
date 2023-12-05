import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalComponent} from "@core/components/modals/base-modal.component";

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async openModal() {
       await super.open(<%= classify(name) %>ContentComponent);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
