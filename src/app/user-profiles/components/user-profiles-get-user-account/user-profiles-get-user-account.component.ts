import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {UsersRequests} from '@users/users.models';
import GetUserAccount = UsersRequests.GetUserAccount;
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;

@Component({
    selector: 'user-profiles-get-user-account',
    templateUrl: './user-profiles-get-user-account.component.html',
    styleUrls: ['./user-profiles-get-user-account.component.scss']
})
export class UserProfilesGetUserAccountComponent extends BaseComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    @Input()
    userAccount: UserAccount;

    user_account: UserAccount;

    @Output()
    userAccountReceived = new EventEmitter<UserAccount>();

    initializeComponent() {
    }

    createRequestData(): GetUserAccount.Request {
      const request = new GetUserAccount.Request();
      request.id = this.userAccount.user_account_id;
      return request;
    }


    get_user_account_subscription$: Subscription;

    getUserAccount(request: GetUserAccount.Request) {
      this.get_user_account_subscription$ = this.usersService.getUserAccount(request)
        .pipe(CommonsService.deserializeMap(GetUserAccount.Response))
        .subscribe(value => {
          this.user_account = value;
          this.userAccountReceived.emit(value);
        });
    }

}

@Component({
    selector: 'user-profiles-get-user-account-no-template',
    templateUrl: './user-profiles-get-user-account-no-template.component.html',
    styleUrls: ['./user-profiles-get-user-account.component.scss']
})
export class UserProfilesGetUserAccountNoTemplateComponent extends UserProfilesGetUserAccountComponent
{
}
