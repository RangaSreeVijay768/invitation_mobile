import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";

@Component({
    selector: 'events-create-event-create-paid-ticket-form',
    templateUrl: './events-create-event-create-paid-ticket-form.component.html',
    styleUrls: ['./events-create-event-create-paid-ticket-form.component.scss']
})
export class EventsCreateEventCreatePaidTicketFormComponent extends FormComponent {

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
