import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import {UsersRequests} from '@users/users.models';
import UserAccount = Users.UserAccount;
import UserFollow = Users.UserFollow;
import GetUserFollowByUserAccountAndFollowerAccount = UsersRequests.GetUserFollowByUserAccountAndFollowerAccount;

@Component({
    selector: 'user-profiles-get-user-follow-by-user-account-and-follower-account',
    templateUrl: './user-profiles-get-user-follow-by-user-account-and-follower-account.component.html',
    styleUrls: ['./user-profiles-get-user-follow-by-user-account-and-follower-account.component.scss']
})
export class UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent extends BaseComponent {

    @Input()
    userAccount: UserAccount;

    @Input()
    followerAccount: UserAccount;

    user_follows: UserFollow;

    @Output()
    userFollowsReceived = new EventEmitter<UserFollow>();
    @Output()
    userFollowNotFound = new EventEmitter<boolean>();

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        console.log('eeeeeeeeeeee', this.followerAccount);
        this.getUserFollowByUserAccountAndFollowerAccount(this.createRequestData());
    }

    createRequestData(user_account_id?: string,
                      follower_account_id?: string): GetUserFollowByUserAccountAndFollowerAccount.Request {
        const request = new GetUserFollowByUserAccountAndFollowerAccount.Request();
        request.user_account = user_account_id || this.userAccount.user_account_id;
        request.follower_account = follower_account_id || this.followerAccount.user_account_id;

        return request;
    }

    get_user_follow_by_user_account_and_follow_account_subscription$: Subscription;

    getUserFollowByUserAccountAndFollowerAccount(request: GetUserFollowByUserAccountAndFollowerAccount.Request) {
        this.get_user_follow_by_user_account_and_follow_account_subscription$ =
            this.usersService.getUserFollowByUserAccountAndFollowerAccount(request)
                .pipe(CommonsService.deserializeMap(GetUserFollowByUserAccountAndFollowerAccount.Response))
                .subscribe(value => {
                    this.user_follows = value;
                    this.userFollowsReceived.emit(value);
                }, error => {
                    console.log(error);
                    if (error.status === 404) {
                        this.userFollowNotFound.emit(true);
                    }
                });
    }
}

@Component({
    selector: 'user-profiles-get-user-follow-by-user-account-and-follower-account-no-template',
    templateUrl: './user-profiles-get-user-follow-by-user-account-and-follower-account-no-template.component.html',
    styleUrls: ['./user-profiles-get-user-follow-by-user-account-and-follower-account.component.scss']
})
export class UserProfilesGetUserFollowByUserAccountAndFollowerAccountNoTemplateComponent
    extends UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent {
}
