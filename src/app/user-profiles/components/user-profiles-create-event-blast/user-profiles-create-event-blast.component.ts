import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Blasts, Events} from '@core/core.models';
import {DateTime} from 'luxon';
import CreateEventBlast = BlastsRequests.CreateEventBlast;
import BlastList = Blasts.BlastList;
import Event = Events.Event;
import EventBlast = Blasts.EventBlast;
import {BlastsRequests} from '../../../blasts/blasts.models';
import {BlastsService} from '../../../blasts/blasts.service';

@Component({
    selector: 'user-profiles-create-event-blast',
    templateUrl: './user-profiles-create-event-blast.component.html',
    styleUrls: ['./user-profiles-create-event-blast.component.scss']
})
export class UserProfilesCreateEventBlastComponent extends BaseComponent {

    constructor(protected blastService: BlastsService, injector: Injector) {
        super(injector);
    }

    @Input()
    blastList: BlastList;

    eventBlast: EventBlast;

    @Input()
    event: Event;

    create_event_blast_subscription$: Subscription;

    @Output()
    eventBlastCreated = new EventEmitter<string>();

    initializeComponent() {
    }

    createRequestData(blast_list_id?: string, blast_list_description?: string, event_id?: string, end_time?: DateTime,
                      start_time?: DateTime): CreateEventBlast.Request {
        const request = new CreateEventBlast.Request();
        request.blast_list = blast_list_id || this.blastList.blast_list_id;
        request.end_time = this.event.end_time;
        request.event = event_id || this.event.event_id;
        request.event_blast_message = blast_list_description || this.blastList.description;
        request.message = this.event.event_description;
        request.start_time = start_time || CommonsService.getCurrentTimeAsDateTime().plus({second: 100});
        return request;
    }

    createEventBlast = (request: CreateEventBlast.Request) => {
        this.create_event_blast_subscription$ = this.blastService.createEventBlast(request)
            .subscribe(value => {
                console.log('create event blast');
                // @ts-ignore
                this.eventBlastCreated.emit(value);
            });
    };

}

@Component({
    selector: 'user-profiles-create-event-blast-no-template',
    templateUrl: './user-profiles-create-event-blast-no-template.component.html',
    styleUrls: ['./user-profiles-create-event-blast.component.scss']
})
export class UserProfilesCreateEventBlastNoTemplateComponent extends UserProfilesCreateEventBlastComponent {
}
