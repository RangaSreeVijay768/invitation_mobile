import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsRequests} from '@events/events.models';
import CreateEventInvitesByEventAndUserAccounts = EventsRequests.CreateEventInvitesByEventAndUserAccounts;
import {EventsService} from '@events/events.service';
import {Blasts, Events, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import Event = Events.Event

@Component({
    selector: 'events-create-event-invites-by-event-and-user-accounts',
    templateUrl: './events-create-event-invites-by-event-and-user-accounts.component.html',
    styleUrls: ['./events-create-event-invites-by-event-and-user-accounts.component.scss']
})
export class EventsCreateEventInvitesByEventAndUserAccountsComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    userAccountIdList: UserAccount[] = [];

    user_accounts =[];

    @Input()
    event: Event;

    @Output()
    eventInvitesCreated = new EventEmitter<boolean>;

    initializeComponent() {
    }

    createRequestData(): CreateEventInvitesByEventAndUserAccounts.Request {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0 ; i < this.userAccountIdList.length; i++){
        this.user_accounts.push(this.userAccountIdList[i].user_account_id);
        console.log(this.user_accounts);
      }
      const request = new CreateEventInvitesByEventAndUserAccounts.Request();
      request.event_id = this.event.event_id;
      request.user_accounts = this.user_accounts;
      return request;
    }

    create_event_invites_by_event_and_user_accounts_subscription$: Subscription;

    createEventInvitesByEventAndUserAccounts = (request: CreateEventInvitesByEventAndUserAccounts.Request) => {
      this.create_event_invites_by_event_and_user_accounts_subscription$ = this.eventsService.createEventInvitesByEventAndUserAccounts(request)
        .subscribe(value => {
          this.eventInvitesCreated.emit(true);
        });
    }
}
