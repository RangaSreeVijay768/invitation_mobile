import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import Event = Events.Event;
import PublishEvent = EventsRequests.PublishEvent;
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-publish-event',
    templateUrl: './events-publish-event.component.html',
    styleUrls: ['./events-publish-event.component.scss']
})
export class EventsPublishEventComponent extends BaseComponent {

    @Input()
    event: Event;
    @Input()
    eventInfo: EventInfo;

    @Output()
    eventPublished = new EventEmitter<boolean>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(event_id?: string): PublishEvent.Request {
        const request = new PublishEvent.Request();
        request.event = event_id || this.event.event_id;
        return request;
    }

    publish_event_subscription$: Subscription;

    publishEvent(request: PublishEvent.Request) {
        this.publish_event_subscription$ = this.eventsService.publishEvent(request)
            .subscribe(value => {
                this.eventPublished.emit(true);
            });
    }
}

@Component({
    selector: 'events-publish-event-no-template',
    templateUrl: './events-publish-event-no-template.component.html',
    styleUrls: ['./events-publish-event.component.scss']
})
export class EventsPublishEventNoTemplateComponent extends EventsPublishEventComponent {
}
