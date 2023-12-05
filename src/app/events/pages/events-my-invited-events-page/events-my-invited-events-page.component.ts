import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";

@Component({
    selector: 'events-my-invited-events-page',
    templateUrl: './events-my-invited-events-page.component.html',
    styleUrls: ['./events-my-invited-events-page.component.scss']
})
export class EventsMyInvitedEventsPageComponent extends PageComponent {
    // page: any = 1;
    // pageSize: any = 10;
    // collectionSize:any = 100;

    selected_option = 'Upcoming events';
    options = EventsConstants.INVITED_OPTIONS;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }
}
