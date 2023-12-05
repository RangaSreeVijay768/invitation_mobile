import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {UsersRequests} from "@users/users.models";
import GetUserFollowByFollowerAccount = UsersRequests.GetUserFollowByFollowerAccount;
import {UsersService} from "@users/users.service";
import {Users} from "@core/core.models";
import UserFollow = Users.UserFollow;

@Component({
    selector: 'user-profiles-get-user-follow-by-follower-account',
    templateUrl: './user-profiles-get-user-follow-by-follower-account.component.html',
    styleUrls: ['./user-profiles-get-user-follow-by-follower-account.component.scss']
})
export class UserProfilesGetUserFollowByFollowerAccountComponent extends BaseComponent {

    constructor(protected userService: UsersService, injector: Injector) {
        super(injector);
    }

    @Output()
    userFollowReceived = new EventEmitter<UserFollow>();

    initializeComponent() {
      this.getUserFollowByFollowerAccount(this.createRequestData());
    }

  createRequestData(): GetUserFollowByFollowerAccount.Request {
    const request = new GetUserFollowByFollowerAccount.Request();
    request.follower_account = '';
    return request;
  }

  get_user_follow_by_follower_account$: Subscription;
  getUserFollowByFollowerAccount(request: GetUserFollowByFollowerAccount.Request) {
    this.get_user_follow_by_follower_account$ = this.userService.getUserFollowByFollowerAccount(request)
      .pipe(CommonsService.deserializeMap(GetUserFollowByFollowerAccount.Response))
      .subscribe(value => {
        this.userFollowReceived.emit(value);
      });
  }

}

@Component({
    selector: 'user-profiles-get-user-follow-by-follower-account-no-template',
    templateUrl: './user-profiles-get-user-follow-by-follower-account-no-template.component.html',
    styleUrls: ['./user-profiles-get-user-follow-by-follower-account.component.scss']
})
export class UserProfilesGetUserFollowByFollowerAccountNoTemplateComponent extends UserProfilesGetUserFollowByFollowerAccountComponent
{
}
