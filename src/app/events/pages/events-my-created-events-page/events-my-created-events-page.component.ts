import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";
import {Events} from "@core/core.models";
// import EventInfo = Events.EventInfo;
import Event = Events.Event;
@Component({
    selector: 'events-my-created-events-page',
    templateUrl: './events-my-created-events-page.component.html',
    styleUrls: ['./events-my-created-events-page.component.scss']
})
export class EventsMyCreatedEventsPageComponent extends PageComponent {
    // page: any = 1;
    // pageSize: any = 10;
    // collectionSize:any = 100;


    selected_option = 'Upcoming events';
    options = EventsConstants.CREATED_OPTIONS;

    event: Event;



    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
