import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsService} from '@events/events.service';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {Events, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import EventAttendee = Events.EventAttendee;
import {EventsRequests} from '@events/events.models';
import GetEventAttendeesOfUserAccount = EventsRequests.GetEventAttendeesOfUserAccount;
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';

@Component({
    selector: 'events-past-attendees-get-event-attendees-of-user-account',
    templateUrl: './events-past-attendees-get-event-attendees-of-user-account.component.html',
    styleUrls: ['./events-past-attendees-get-event-attendees-of-user-account.component.scss']
})
export class EventsPastAttendeesGetEventAttendeesOfUserAccountComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    userAccount: UserAccount;

    event_attendees: EventAttendee[];

    @Output()
    eventAttendeesReceived = new EventEmitter<EventAttendee[]>();

    @Output()
    eventAttendees = new EventEmitter<EventAttendee[]>();

    get_event_attendees_of_user_account_subscription$: Subscription;

    initializeComponent() {
        this.getEventAttendeesOfUserAccount(this.createRequestData());
    }

    createRequestData(user_account?: UserAccount, first?: number, count?: number, column_name?: string,
                      column_order?: string): GetEventAttendeesOfUserAccount.Request {
        let request = new GetEventAttendeesOfUserAccount.Request();
        request.user_account = this.userAccount.user_account_id;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    getEventAttendeesOfUserAccount(request: GetEventAttendeesOfUserAccount.Request) {
        this.get_event_attendees_of_user_account_subscription$ =
            this.eventsService.getEventAttendeesOfUserAccount(request)
                .pipe(CommonsService.deserializeMap(GetEventAttendeesOfUserAccount.Response))
                .subscribe(value => {
                    this.event_attendees = value;
                    this.eventAttendeesReceived.emit(value);
                    this.eventAttendees.emit(value);
                });
    }

}


@Component({
    selector: 'events-past-attendees-get-event-attendees-of-user-account-scrolling',
    templateUrl: './events-past-attendees-get-event-attendees-of-user-account-scrolling.component.html',
    styleUrls: ['./events-past-attendees-get-event-attendees-of-user-account.component.scss']
})
export class EventPastAttendeesGetEventAttendeesOfUserAccountScrolling
    extends BaseInfiniteScrollComponent<EventsPastAttendeesGetEventAttendeesOfUserAccountComponent> {

    @Input()
    userAccount: UserAccount;

    event_attendees: EventAttendee[];

    event_attendees_list: EventAttendee[] = [];

    user_accounts_list: UserAccount[] = [];

    @Output()
    userAccountsReceived = new EventEmitter<UserAccount[]>

    initializeComponent() {
    }


    performScrolling() {
        const scrolling_component = this.scrolling_component;
        console.log(scrolling_component, 'past guests');
        scrolling_component.getEventAttendeesOfUserAccount(
            scrolling_component.createRequestData(undefined, this.currentCount, this.numberOfItems)
        );
    }

    selectAllItems(event_attendees_list: EventAttendee[]) {
        this.event_attendees_list = this.event_attendees_list.concat(event_attendees_list);
    }


    removeDuplicate = (object) => object.user_account.user_account_id;
}
