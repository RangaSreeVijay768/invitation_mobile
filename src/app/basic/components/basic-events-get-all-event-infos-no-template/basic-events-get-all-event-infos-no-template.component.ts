import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {
    EventsGetAllEventsInfosNoTemplateComponent
} from '@events/components/events-get-all-events-infos/events-get-all-events-infos.component';


@Component({
    selector: 'basic-events-get-all-event-infos-no-template',
    templateUrl: './basic-events-get-all-event-infos-no-template.component.html',
    styleUrls: ['./basic-events-get-all-event-infos-no-template.component.scss']
})
export class BasicEventsGetAllEventInfosNoTemplateComponent extends EventsGetAllEventsInfosNoTemplateComponent {

    // constructor(injector: Injector) {
    //     super(injector);
    // }


}
