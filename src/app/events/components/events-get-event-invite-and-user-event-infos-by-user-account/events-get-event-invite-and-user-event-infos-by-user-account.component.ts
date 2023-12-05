import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {AbstractInfiniteScrollComponent, BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {EventsService} from '@events/events.service';
import {Events, Users} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {DateTime} from 'luxon';
import UserAccount = Users.UserAccount;
import GetEventInviteAndUserEventInfosByUserAccount = EventsRequests.GetEventInviteAndUserEventInfosByUserAccount;
import EventInviteAndUserEventInfo = Events.EventInviteAndUserEventInfo;
import Event = Events.Event;

@Component({
    selector: 'events-get-event-invite-and-user-event-infos-by-user-account',
    templateUrl: './events-get-event-invite-and-user-event-infos-by-user-account.component.html',
    styleUrls: ['./events-get-event-invite-and-user-event-infos-by-user-account.component.scss']
})
export class EventsGetEventInviteAndUserEventInfosByUserAccountComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    userAccount: UserAccount;
    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;

    event_invite_and_user_event_infos: EventInviteAndUserEventInfo[];

    @Output()
    eventInviteAndUserEventInfosReceived = new EventEmitter<EventInviteAndUserEventInfo[]>();

    initializeComponent() {
        this.getEventInviteAndUserEventInfosByUserAccount(this.createRequestData());
    }

    createRequestData(user_account_id?: string, start_time?: DateTime, end_time?: DateTime, first?: number,
                      count?: number, column_name?: string, column_order?: string) {
        let request = new GetEventInviteAndUserEventInfosByUserAccount.Request();
        // request.user_account = user_account_id || this.userAccount.user_account_id;
        request.user_account = "7fbbf31a-34da-4900-914f-52f6eaf78ac2";
        request.start_time = start_time || this.startTime;
        request.end_time = end_time || this.endTime;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    get_event_invite_and_user_event_infos_by_user_account_subscription$: Subscription;

    getEventInviteAndUserEventInfosByUserAccount(request: GetEventInviteAndUserEventInfosByUserAccount.Request) {
        this.get_event_invite_and_user_event_infos_by_user_account_subscription$ =
            this.eventsService.getEventInviteAndUserEventInfosByUserAccount(request)
                .pipe(CommonsService.deserializeMap(GetEventInviteAndUserEventInfosByUserAccount.Response))
                .subscribe(value => {
                    this.event_invite_and_user_event_infos = value;
                    this.eventInviteAndUserEventInfosReceived.emit(value);
                });
    }


}

@Component({
    selector: 'events-get-event-invite-and-user-event-infos-by-user-account-no-template',
    templateUrl: './events-get-event-invite-and-user-event-infos-by-user-account-no-template.component.html',
    styleUrls: ['./events-get-event-invite-and-user-event-infos-by-user-account.component.scss']
})
export class EventsGetEventInviteAndUserEventInfosByUserAccountNoTemplateComponent
    extends EventsGetEventInviteAndUserEventInfosByUserAccountComponent {
}

@Component({
    selector: 'events-get-event-invite-and-user-event-infos-by-user-account-scrolling',
    templateUrl: './events-get-event-invite-and-user-event-infos-by-user-account-scrolling.component.html',
    styleUrls: ['./events-get-event-invite-and-user-event-infos-by-user-account.component.scss']
})
export class EventsGetEventInviteAndUserEventInfosByUserAccountScrollingComponent
    extends BaseInfiniteScrollComponent<EventsGetEventInviteAndUserEventInfosByUserAccountNoTemplateComponent> {

    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;

    @Output()
    eventAttendeeCreated = new EventEmitter<Event>();

    current_time = CommonsService.getCurrentTimeAsDateTime();

    initializeComponent() {
    }


    performScrolling() {
        // this.scrollingComponent.getEventInviteAndUserEventInfosByUserAccount(
        //     this.scrollingComponent.createRequestData(undefined, undefined, undefined, this.currentCount,
        //         this.numberOfItems));
        console.log('scrolled');
    }


}
