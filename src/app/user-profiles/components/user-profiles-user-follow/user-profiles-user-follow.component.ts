import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import UserFollow = Users.UserFollow;

@Component({
  selector: 'user-profiles-user-follow',
  templateUrl: './user-profiles-user-follow.component.html',
  styleUrls: ['./user-profiles-user-follow.component.scss']
})
export class UserProfilesUserFollowComponent extends BaseComponent {

  @Input()
  followerAccount: UserAccount;
  @Input()
  userAccount: UserAccount;

  @Input()
  cssClasses: string | string[];

  user_follow: UserFollow;

  constructor(injector: Injector) {
    super(injector);
  }

    initializeComponent() {
        console.log('userrrrrrrrrrr', this.followerAccount.display_name);
        console.log(this.user_follow);
    }


}

@Component({
  selector: 'user-profiles-user-follow-no-template',
  templateUrl: './user-profiles-user-follow-no-template.component.html',
  styleUrls: ['./user-profiles-user-follow.component.scss']
})
export class UserProfilesUserFollowNoTemplateComponent extends UserProfilesUserFollowComponent {
}
