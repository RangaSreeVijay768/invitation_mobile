import {Component} from '@angular/core';
import {
    EventsGetUserEventTicketsByUserAccountNoTemplateComponent,
    EventsGetUserEventTicketsByUserAccountScrollingComponent
} from "@events/components/events-get-user-event-tickets-by-user-account/events-get-user-event-tickets-by-user-account.component";

@Component({
    selector: 'user-profiles-get-user-event-tickets-by-user-account-scrolling',
    templateUrl: './user-profiles-get-user-event-tickets-by-user-account-scrolling.component.html',
    styleUrls: ['./user-profiles-get-user-event-tickets-by-user-account-scrolling.component.scss']
})
export class UserProfilesGetUserEventTicketsByUserAccountScrollingComponent
    extends EventsGetUserEventTicketsByUserAccountScrollingComponent {

}

@Component({
    selector: 'events-get-user-event-tickets-by-user-account-scrolling-no-template',
    templateUrl: './events-get-user-event-tickets-by-user-account-scrolling-no-template.component.html',
    styleUrls: ['./user-profiles-get-user-event-tickets-by-user-account-scrolling.component.scss']
})
export class EventsGetUserEventTicketsByUserAccountScrollingNoTemplateComponent
    extends EventsGetUserEventTicketsByUserAccountNoTemplateComponent {
}
