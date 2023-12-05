import {Component, Injector, Input, ViewChild} from "@angular/core";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {EVENTS_CO_HOST_FORM_MODEL} from "@events/events.form.models";
import {
    EventsAddCoHostStatusComponent, EventsAddCoHostStatusNoTemplateComponent
} from "@events/components/events-add-co-host-status/events-add-co-host-status.component";
import {
    EventsRemoveCoHostStatusComponent, EventsRemoveCoHostStatusNoTemplateComponent
} from "@events/components/events-remove-co-host-status/events-remove-co-host-status.component";
import {Events} from "@core/core.models";
import EventAttendee = Events.EventAttendee;

@Component({
    selector: 'events-co-host-status-form',
    templateUrl: './events-co-host-status-form.component.html',
    styleUrls: ['./events-co-host-status-form.component.scss']
})
export class EventsCoHostStatusFormComponent extends FormComponent {


    @Input()
    eventAttendee: EventAttendee;

    @ViewChild(EventsAddCoHostStatusNoTemplateComponent, {static: true})
    events_add_co_host_status_component: EventsAddCoHostStatusComponent;
    @ViewChild(EventsRemoveCoHostStatusNoTemplateComponent, {static: true})
    events_remove_co_host_status_component: EventsRemoveCoHostStatusComponent;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
        // @ts-ignore
        this.getInputModel('co_host_status').value = this.eventAttendee.co_host_status === 'ACTIVE';
        this.getInputModel('co_host_status').valueChanges.subscribe(value => {
            if (value) {
                this.events_add_co_host_status_component.addCoHostStatus(
                    this.events_add_co_host_status_component.createRequestData());
            } else {
                this.events_remove_co_host_status_component.removeCoHostStatus(
                    this.events_remove_co_host_status_component.createRequestData());
            }
        })
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_CO_HOST_FORM_MODEL();
    }
}
