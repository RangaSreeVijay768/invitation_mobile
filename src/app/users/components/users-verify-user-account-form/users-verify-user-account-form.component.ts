import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
    USERS_VERIFY_USER_ACCOUNT_FORM_MODEL,
    USERS_VERIFY_USER_ACCOUNT_LAYOUT, USERS_VERIFY_USER_OTP_LOGIN_FORM_MODEL,
    USERS_VERIFY_USER_OTP_LOGIN_LAYOUT
} from '@users/users.form.models';
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;
import MessageDelivery = Users.MessageDelivery;
import {UsersRequests} from '@users/users.models';
import VerifyUserAccountVerification = UsersRequests.VerifyUserAccountVerification;

@Component({
    selector: 'users-verify-user-account-form',
    templateUrl: './users-verify-user-account-form.component.html',
    styleUrls: ['./users-verify-user-account-form.component.scss']
})
export class UsersVerifyUserAccountFormComponent extends FormComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    user_auth_token: UserAuthToken;

    // phone_number: string;

    email_id: string;

    messageDelivery: MessageDelivery;

    formLayout = USERS_VERIFY_USER_OTP_LOGIN_LAYOUT;

    @Output()
    userAuthTokenReceived = new EventEmitter<UserAuthToken>();

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_VERIFY_USER_OTP_LOGIN_FORM_MODEL();
    }

    createRequestData(message_type?: string, phone_number?: string, email_id?: string): VerifyUserAccountVerification.Request {
        const request = new VerifyUserAccountVerification.Request();
        if(message_type==="PHONE"){
            request.phone_number = phone_number;
        }
        else{
        request.email_id = email_id;
        }

        request.verification_code = this.getInputModelValueAsString('verification_code');
        request.verification_type = message_type;

        return request;

    }

    sign_up_verification_subscription$: Subscription;

    verifyUserAccountVerfication(request: VerifyUserAccountVerification.Request) {
        this.sign_up_verification_subscription$ = this.usersService.verifyUserAccountVerification(request)
            .pipe(CommonsService.deserializeMap(VerifyUserAccountVerification.Response))
            .subscribe(value => {
                this.userAuthTokenReceived.emit(value);
            });
    }
}
