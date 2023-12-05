import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {UsersService} from '@users/users.service';
import {
     USERS_SIGN_IN_WITH_OTP_FORM_LAYOUT, USERS_SIGN_IN_WITH_OTP_FORM_MODEL
} from '@users/users.form.models';
import {UsersRequests} from '@users/users.models';
import SignIn = UsersRequests.SignIn;
import StartLogin = UsersRequests.StartLogin;
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'users-signin-with-otp-form',
    templateUrl: './users-signin-with-otp-form.component.html',
    styleUrls: ['./users-signin-with-otp-form.component.scss']
})
export class UsersSigninWithOtpFormComponent extends FormComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    email_id: string;

    messageDelivery: MessageDelivery;


    @Output()
    userSignInStarted = new EventEmitter<StartLogin.Response>();

    @Output()
    userAuthTokenReceived = new EventEmitter<UserAuthToken>();


    @Output()
    messageDeliveryReceived = new EventEmitter<MessageDelivery>();

    sign_in_with_otp_subscription$: Subscription;

    formLayout = USERS_SIGN_IN_WITH_OTP_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_SIGN_IN_WITH_OTP_FORM_MODEL();
    }

    createRequestData(): StartLogin.Request {
        const request = new StartLogin.Request();
        if (this.getInputModelValueAsString('email').length === 10){
            request.phone_number = this.getInputModelValueAsString('email');
            this.email_id = request.phone_number;
        }else {
            request.email_id = this.getInputModelValueAsString('email');
            this.email_id = request.email_id;
        }
        return request;
    }

    start_login_subscription$: Subscription;

    startLogin(request: StartLogin.Request) {
        // this.coreTestHttpClient.post('test', {});
        this.start_login_subscription$ = this.usersService.startLogin(request)
            .pipe(CommonsService.deserializeMap(StartLogin.Response))
            .subscribe(value => {
                console.log(value);
                this.userSignInStarted.emit(value);
                // this.user_auth_token = value;
                console.log('emitted', this.messageDeliveryReceived);
                this.userAuthTokenReceived.emit(value);
                this.messageDelivery = value;
                console.log('messageDelivery', this.messageDelivery);
                this.messageDeliveryReceived.emit(value);
            });
    }
}
