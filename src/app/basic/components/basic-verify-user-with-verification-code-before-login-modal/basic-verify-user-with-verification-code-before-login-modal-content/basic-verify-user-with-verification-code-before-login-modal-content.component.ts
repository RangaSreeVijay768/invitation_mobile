import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;
import UserAuthToken = Users.UserAuthToken;

@Component({
  selector: 'basic-verify-user-with-verification-code-before-login-modal-content',
  templateUrl: './basic-verify-user-with-verification-code-before-login-modal-content.component.html',
  styleUrls: ['./basic-verify-user-with-verification-code-before-login-modal-content.component.scss']
})
export class BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent extends BaseModalContentComponent {

  constructor( injector: Injector) {
    super(injector);
  }

  @Input()
  messageDelivery: MessageDelivery;

  initializeComponent() {
    console.log(this.messageDelivery, 'messssssssssssss');
  }

  setUserAuthToken(user_auth_token?: UserAuthToken) {
    this.authService.setUserAuthToken(user_auth_token);
  }

}

