import {Component, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import {ClipboardService} from '@core/components/clipboard.service';

@Component({
    selector: 'event-share-event-page',
    templateUrl: './event-share-event-page.component.html',
    styleUrls: ['./event-share-event-page.component.scss']
})
export class EventShareEventPageComponent extends PageComponent {

    constructor( injector: Injector, protected clipboardService: ClipboardService) {
        super(injector);
    }

    events: Events.Event[];

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;


    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 0);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
            console.log(value, 'from share event');
        });
    }

    // navigateToMassMessaging() {
    //     this.router.navigateByUrl('signedin/userprofiles/blasts/default');
    // }
    //
    // naviagateToDetailsPage() {
    //     console.log('jfsdlfg,sdv,jhfsaldfsdajgdsf');
    //     this.router.navigateByUrl(`signedin/events/${this.eventInfo.event.event_id}/details`);
    // }

    // navigateToEditEvent() {
    //     console.log(this.eventInfo.event.event_id);
    //     const eventId = this.eventInfo.event.event_id; // Replace this with the actual eventId
    //     this.router.navigate(['/signedin/events/', eventId, 'editevent']);
    // }

    goBack() {
        // this.location.back();
    }

    naviagateToDetailsPage() {
        this.router.navigateByUrl(`signedin/events/${this.eventInfo.event.event_id}/details`);
    }

    navigateToEditEvent() {
        const eventId = this.eventInfo.event.event_id; // Replace this with the actual eventId
        this.router.navigate(['/signedin/events/', eventId, 'editevent']);
    }

    protected readonly event = event;
}
