import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";

@Component({
    selector: 'events-my-events-page',
    templateUrl: './events-my-events-page.component.html',
    styleUrls: ['./events-my-events-page.component.scss']
})
export class EventsMyEventsPageComponent extends PageComponent {

    selected_option = 'Upcoming events';
    options = EventsConstants.EVENT_OPTIONS;
    constructor(injector: Injector) {
        super(injector);
    }
    initializeComponent() {
    }


}
