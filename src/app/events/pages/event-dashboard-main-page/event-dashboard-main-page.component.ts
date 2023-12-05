import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;

@Component({
    selector: 'event-dashboard-main-page',
    templateUrl: './event-dashboard-main-page.component.html',
    styleUrls: ['./event-dashboard-main-page.component.scss']
})
export class EventDashboardMainPageComponent extends PageComponent {

    options = EventsConstants.DASHBOARD_OPTIONS;

    selected_option = 'Dashboard';

    constructor(injector: Injector) {
        super(injector);
    }

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;


    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterObservable('eventInfo');
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
        });
    }


}
