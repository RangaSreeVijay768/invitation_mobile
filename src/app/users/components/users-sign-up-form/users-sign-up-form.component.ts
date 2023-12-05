import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {Subscription} from 'rxjs';

import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {UsersRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import {USERS_SIGN_UP_FORM_MODEL, USERS_SIGN_UP_USER_FORM_LAYOUT} from '@users/users.form.models';
import SignUp = UsersRequests.SignUp;
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;
import MessageDelivery = Users.MessageDelivery;
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'users-sign-up-form',
    templateUrl: './users-sign-up-form.component.html',
    styleUrls: ['./users-sign-up-form.component.scss']
})
export class UsersSignUpFormComponent extends FormComponent {

    formLayout = USERS_SIGN_UP_USER_FORM_LAYOUT;

    phone_number: string;

    email_id: string;

    messageDelivery: MessageDelivery;


    @Output()
    messageDeliveryReceived = new EventEmitter<MessageDelivery>();

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }


    @Output()
    userSignUpCreated = new EventEmitter<Object>();

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_SIGN_UP_FORM_MODEL();
    }


    createRequestData(): SignUp.Request {
        const request = new SignUp.Request();
        // request.email = this.getInputModelValueAsString('email');

        if (this.getInputModelValueAsString('email').length === 10) {
            request.phone_number = this.getInputModelValueAsString('email');
            this.email_id = request.phone_number;
        } else {
            request.email = this.getInputModelValueAsString('email');
            this.email_id = request.email;
        }
        // request.whats_app_number = this.getInputModelValueAsString('whats_app_number');
        request.password = this.getInputModelValueAsString('password');
        request.display_name = this.getInputModelValueAsString('display_name');
        return request;
    }

    sign_up_subscription$: Subscription;


    signUp = (request: SignUp.Request) => {
        this.sign_up_subscription$ = this.usersService.signUp(request)
            .pipe(CommonsService.deserializeMap(SignUp.Response))
            .subscribe(value => {
                this.messageDelivery = value;
                this.messageDeliveryReceived.emit(value);
            });
    };
}
