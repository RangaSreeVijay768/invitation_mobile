import {Component, EventEmitter, Injector, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import {BaseInfiniteScrollComponent} from "@core/components/base-infinite-scroll.component";
import UserEventTicket = Events.UserEventTicket;
import GetUserEventTicketsByUserAccount = EventsRequests.GetUserEventTicketsByUserAccount;

@Component({
    selector: 'events-get-user-event-tickets-by-user-account',
    templateUrl: './events-get-user-event-tickets-by-user-account.component.html',
    styleUrls: ['./events-get-user-event-tickets-by-user-account.component.scss']
})
export class EventsGetUserEventTicketsByUserAccountComponent extends SortedPaginatedBaseComponent {

    user_event_tickets: UserEventTicket[];

    @Output()
    userEventTicketsReceived = new EventEmitter<UserEventTicket[]>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserEventTicketsByUserAccount(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string,
                      column_order?: string): GetUserEventTicketsByUserAccount.Request {
        let request = new GetUserEventTicketsByUserAccount.Request();

        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }


    get_user_event_tickets_by_user_account_subscription$: Subscription;

    getUserEventTicketsByUserAccount(request: GetUserEventTicketsByUserAccount.Request) {
        this.get_user_event_tickets_by_user_account_subscription$ =
            this.eventsService.getUserEventTicketsByUserAccount(request)
                .pipe(CommonsService.deserializeMap(GetUserEventTicketsByUserAccount.Response))
                .subscribe(value => {
                    this.user_event_tickets = value;
                    this.userEventTicketsReceived.emit(value);
                });
    }

}

@Component({
    selector: 'events-get-user-event-tickets-by-user-account-no-template',
    templateUrl: './events-get-user-event-tickets-by-user-account-no-template.component.html',
    styleUrls: ['./events-get-user-event-tickets-by-user-account.component.scss']
})
export class EventsGetUserEventTicketsByUserAccountNoTemplateComponent
    extends EventsGetUserEventTicketsByUserAccountComponent {
}

@Component({
    selector: 'events-get-user-event-tickets-by-user-account-scrolling',
    templateUrl: './events-get-user-event-tickets-by-user-account-scrolling.component.html',
    styleUrls: ['./events-get-user-event-tickets-by-user-account.component.scss']
})
export class EventsGetUserEventTicketsByUserAccountScrollingComponent
    extends BaseInfiniteScrollComponent<EventsGetUserEventTicketsByUserAccountComponent> {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    performScrolling() {
        this.scrolling_component.getUserEventTicketsByUserAccount(
            this.scrolling_component.createRequestData(this.currentCount, this.numberOfItems))
    }
}
