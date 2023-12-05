import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {USERS_SIGN_IN_WITH_OTP_FORM_LAYOUT, USERS_SIGN_IN_WITH_OTP_FORM_MODEL} from '@users/users.form.models';
import {Users} from '@core/core.models';
import {UsersRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import MessageDelivery = Users.MessageDelivery;
import UserAuthToken = Users.UserAuthToken;
import GetOrCreateUserAccountAndStartLogin = UsersRequests.GetOrCreateUserAccountAndStartLogin;

@Component({
    selector: 'users-get-or-create-user-account-and-start-login-form',
    templateUrl: './users-get-or-create-user-account-and-start-login-form.component.html',
    styleUrls: ['./users-get-or-create-user-account-and-start-login-form.component.scss']
})
export class UsersGetOrCreateUserAccountAndStartLoginFormComponent extends FormComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    email_id: string;

    messageDelivery: MessageDelivery;


    @Output()
    userSignInStarted = new EventEmitter<GetOrCreateUserAccountAndStartLogin.Response>();

    @Output()
    userAuthTokenReceived = new EventEmitter<UserAuthToken>();


    @Output()
    messageDeliveryReceived = new EventEmitter<MessageDelivery>();

    sign_in_with_otp_subscription$: Subscription;

    formLayout = USERS_SIGN_IN_WITH_OTP_FORM_LAYOUT;

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_SIGN_IN_WITH_OTP_FORM_MODEL();
    }

    createRequestData(): GetOrCreateUserAccountAndStartLogin.Request {
        const request = new GetOrCreateUserAccountAndStartLogin.Request();
        if (this.getInputModelValueAsString('email').length === 10) {
            request.phone_number = this.getInputModelValueAsString('email');
            this.email_id = request.phone_number;
        } else {
            request.email_id = this.getInputModelValueAsString('email');
            this.email_id = request.email_id;
        }
        return request;
    }

    start_login_subscription$: Subscription;

    getOrCreateUserAccountAndStartLogin(request: GetOrCreateUserAccountAndStartLogin.Request) {
        this.start_login_subscription$ = this.usersService.getOrCreateUserAccountAndStartLogin(request)
            .pipe(CommonsService.deserializeMap(GetOrCreateUserAccountAndStartLogin.Response))
            .subscribe(value => {
                console.log(value);
                console.log('emitted', this.messageDeliveryReceived);
                this.userSignInStarted.emit(value);
                this.userAuthTokenReceived.emit(value);
                this.messageDelivery = value;
                console.log('messageDelivery', this.messageDelivery);
                this.messageDeliveryReceived.emit(value);
            });
    }
}
