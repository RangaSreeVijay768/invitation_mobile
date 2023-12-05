import {Component, Injector} from "@angular/core";
import {Observable} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-event-dashboard-event-details-page',
    templateUrl: './events-event-dashboard-event-details-page.component.html',
    styleUrls: ['./events-event-dashboard-event-details-page.component.scss']
})
export class EventsEventDashboardEventDetailsPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;


    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 1);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
        });
    }

    navigateToEditEvent() {
        console.log(this.eventInfo.event.event_id);
        const eventId = this.eventInfo.event.event_id; // Replace this with the actual eventId
        this.router.navigate(['/signedin/events/', eventId, 'editevent']);
    }

    navigateToEventDetailsPage(event_id?: string) {
        // this.router.navigateByUrl(`/signedin/events/${event_id}`);
      this.router.navigateByUrl(`/signedin/events/shareevent/${event_id}`);
    }
}
