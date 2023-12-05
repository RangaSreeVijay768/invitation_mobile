import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_LAYOUT, EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_MODEL} from '@events/events.form.models';

@Component({
    selector: 'events-search-event-member-infos-form',
    templateUrl: './events-search-event-member-infos-form.component.html',
    styleUrls: ['./events-search-event-member-infos-form.component.scss']
})
export class EventsSearchEventMemberInfosFormComponent extends FormComponent {
    formLayout = EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_LAYOUT;
    constructor(injector: Injector) {
        super(injector);
    }
    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_MODEL();
    }
    initializeComponent() {
    }

    afterInitializeComponent() {
    }
}
