import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends FormComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return [];
    }
}
