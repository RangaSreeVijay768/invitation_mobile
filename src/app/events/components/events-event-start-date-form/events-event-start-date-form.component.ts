import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {Moment} from 'moment';
import {ModalResult} from '@core/app.models';

@Component({
    selector: 'events-event-start-date-form',
    templateUrl: './events-event-start-date-form.component.html',
    styleUrls: ['./events-event-start-date-form.component.scss']
})
export class EventsEventStartDateFormComponent extends FormComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    selected_date_of_birth: Moment;

    @Output()
    startDatePicked = new EventEmitter<Moment>();

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    slecteddob() {
        console.log(this.selected_date_of_birth);
        console.log("moment",this.selected_date_of_birth?.toISOString());
        console.log(this.selected_date_of_birth.toISOString());
        this.startDatePicked.emit(this.selected_date_of_birth);
    }

    getFormModel(): DynamicFormControlModel[] {
        return [];
    }
}
