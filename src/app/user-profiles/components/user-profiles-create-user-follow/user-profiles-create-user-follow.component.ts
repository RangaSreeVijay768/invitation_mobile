// @ts-ignore

import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import {UsersService} from '@users/users.service';
import {UsersRequests} from '@users/users.models';
import CreateUserFollow = UsersRequests.CreateUserFollow;

@Component({
  selector: 'user-profiles-create-user-follow',
  templateUrl: './user-profiles-create-user-follow.component.html',
  styleUrls: ['./user-profiles-create-user-follow.component.scss']
})
export class UserProfilesCreateUserFollowComponent extends BaseComponent {

  @Input()
  followerAccount: UserAccount;


  @Output()
  userFollowCreated = new EventEmitter<string>();


  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    // this.createUserFollow(this.createRequestData());
  }

  createRequestData(follower_account_id?: string): CreateUserFollow.Request {
    const request = new CreateUserFollow.Request();
    request.follower_account = follower_account_id || this.followerAccount.user_account_id;
    request.user_account = this.loggedAccount.user_account_id;

    return request;
  }

  create_user_follow_subscription$: Subscription;

  createUserFollow(request: CreateUserFollow.Request) {
    this.create_user_follow_subscription$ = this.usersService.createUserFollow(request)
      .subscribe(value => {
        this.userFollowCreated.emit(value);
      });
  }

}

@Component({
    selector: 'user-profiles-create-user-follow-no-template',
    templateUrl: './user-profiles-create-user-follow-no-template.component.html',
    styleUrls: ['./user-profiles-create-user-follow.component.scss']
})
export class UserProfilesCreateUserFollowNoTemplateComponent extends UserProfilesCreateUserFollowComponent {
}
