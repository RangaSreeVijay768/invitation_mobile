import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BasePopoverComponent} from "@core/components/popover/base-popover.component";

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends BasePopoverComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    async presentPopover(event:Event): Promise<void> {
       await super.presentPopover(<%= classify(name) %>ContentComponent,undefined,event);
    }

    initializeComponent() {
    }



}
