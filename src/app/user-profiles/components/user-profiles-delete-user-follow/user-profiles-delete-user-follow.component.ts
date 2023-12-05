import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import {UsersRequests} from '@users/users.models';
import DeleteUserFollow = UsersRequests.DeleteUserFollow;
import {UsersService} from '@users/users.service';
import UserFollow = Users.UserFollow;

@Component({
  selector: 'user-profiles-delete-user-follow',
  templateUrl: './user-profiles-delete-user-follow.component.html',
  styleUrls: ['./user-profiles-delete-user-follow.component.scss']
})
export class UserProfilesDeleteUserFollowComponent extends BaseComponent {
  @Input()
  userFollow: UserAccount;

  @Output()
  userFollowDeleted = new EventEmitter<boolean>();

  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    // this.deleteUserFollow(this.createRequestData());
  }

  createRequestData(id?: string): DeleteUserFollow.Request {
    const request = new DeleteUserFollow.Request();
    request.id = id || this.userFollow.user_account_id;

    return request;
  }

  delete_user_follow_subscription$: Subscription;

  deleteUserFollow(request: DeleteUserFollow.Request) {
    this.delete_user_follow_subscription$ = this.usersService.deleteUserFollow(request)
      .subscribe(value => {
        this.userFollowDeleted.emit(true);
      });
  }
}

@Component({
  selector: 'user-profiles-delete-user-follow-no-template',
  templateUrl: './user-profiles-delete-user-follow-no-template.component.html',
  styleUrls: ['./user-profiles-delete-user-follow.component.scss']
})
export class UserProfilesDeleteUserFollowNoTemplateComponent extends UserProfilesDeleteUserFollowComponent {
}
