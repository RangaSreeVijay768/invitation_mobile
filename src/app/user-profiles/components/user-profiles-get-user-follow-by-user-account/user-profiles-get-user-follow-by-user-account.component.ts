import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {UsersRequests} from "@users/users.models";
import GetUserFollowByUserAccount = UsersRequests.GetUserFollowByUserAccount;
import {UsersService} from "@users/users.service";
import {Users} from "@core/core.models";
import UserFollow = Users.UserFollow;

@Component({
    selector: 'user-profiles-get-user-follow-by-user-account',
    templateUrl: './user-profiles-get-user-follow-by-user-account.component.html',
    styleUrls: ['./user-profiles-get-user-follow-by-user-account.component.scss']
})
export class UserProfilesGetUserFollowByUserAccountComponent extends BaseComponent {

    constructor(protected userService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
      this.getUserFollowByUserAccount(this.createRequestData());
    }

  @Output()
  userFollowByUserAccountReceived = new EventEmitter<UserFollow[]>;

  createRequestData(): GetUserFollowByUserAccount.Request {
    const request = new GetUserFollowByUserAccount.Request();
    return request;
  }

  get_user_follow_by_user_account$: Subscription;
  getUserFollowByUserAccount(request: GetUserFollowByUserAccount.Request) {
    this.get_user_follow_by_user_account$ = this.userService.getUserFollowByUserAccount(request)
      .pipe(CommonsService.deserializeMap(GetUserFollowByUserAccount.Response))
      .subscribe(value => {
        this.userFollowByUserAccountReceived.emit(value);
      });
  }

}

@Component({
    selector: 'user-profiles-get-user-follow-by-user-account-no-template',
    templateUrl: './user-profiles-get-user-follow-by-user-account-no-template.component.html',
    styleUrls: ['./user-profiles-get-user-follow-by-user-account.component.scss']
})
export class UserProfilesGetUserFollowByUserAccountNoTemplateComponent extends UserProfilesGetUserFollowByUserAccountComponent
{
}
