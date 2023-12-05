import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {BASIC_USER_INFO_FORM_LAYOUT, BASIC_VERIFY_USER_FORM_MODEL} from '@basic/basic.form.model';
import {UsersRequests} from '@users/users.models';
import VerifyUserAccountVerificationLogin = UsersRequests.VerifyUserAccountVerificationLogin;
import {USERS_VERIFY_USER_ACCOUNT_LAYOUT} from '@users/users.form.models';
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;
import MessageDelivery = Users.MessageDelivery;
import {UsersService} from '@users/users.service';

@Component({
    selector: 'basic-verify-user-with-verification-code-before-login-form',
    templateUrl: './basic-verify-user-with-verification-code-before-login-form.component.html',
    styleUrls: ['./basic-verify-user-with-verification-code-before-login-form.component.scss']
})
export class BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent extends FormComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }


    user_auth_token: UserAuthToken;

    // phone_number: string;

    email_id: string;

    @Input()
    messageDelivery: MessageDelivery;

    formLayout = USERS_VERIFY_USER_ACCOUNT_LAYOUT;

    @Output()
    userAuthTokenReceived = new EventEmitter<UserAuthToken>();

    initializeComponent() {
        console.log('verifyyyyyyyyyyyy', this.messageDelivery);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return BASIC_VERIFY_USER_FORM_MODEL();
    }


    createRequestData(): VerifyUserAccountVerificationLogin.Request {
        console.log('typeeeeee', this.messageDelivery.address);
        const request = new VerifyUserAccountVerificationLogin.Request();
        request.verification_code = this.getInputModelValueAsString('verification_code');
        if (this.messageDelivery.message_type === 'SMS') {
            request.phone_number = this.messageDelivery.address;
            request.verification_type = 'PHONE';
        } else {
            request.email_id = this.messageDelivery.address;
            request.verification_type = this.messageDelivery.message_type;
        }

        return request;
    }

    sign_in_verification_subscription$: Subscription;

    verifyUserAccountVerficationLogin(request: VerifyUserAccountVerificationLogin.Request) {
        this.sign_in_verification_subscription$ = this.usersService.verifyUserAccountVerificationLogin(request)
            .pipe(CommonsService.deserializeMap(VerifyUserAccountVerificationLogin.Response))
            .subscribe(value => {
                this.userAuthTokenReceived.emit(value);
            });
    }

}
