import {Component, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import {Location} from "@angular/common";
import UserEventInfo = Events.UserEventInfo;

@Component({
    selector: 'events-edit-event-page',
    templateUrl: './events-edit-event-page.component.html',
    styleUrls: ['./events-edit-event-page.component.scss']
})
export class EventsEditEventPageComponent extends PageComponent {

    constructor(protected location: Location, injector: Injector) {
        super(injector);
    }

    userEventInfo$: Observable<UserEventInfo>;
    userEventInfo: UserEventInfo;


    initializeComponent() {
        this.userEventInfo$ = this.getRouterParameterFromParentObservable('userEventInfo', 1);
        this.userEventInfo$.subscribe(value => {
            this.userEventInfo = value;
            console.log(value, 'from edit event');
        });
    }

    navigateToEventDashboardPage(event_id: string) {
        console.log('event', event_id);
        this.router.navigateByUrl(`/signedin/events/eventdashboard/${event_id}/eventdetails`);
    }

    goBack() {
        this.location.back();
    }
}
