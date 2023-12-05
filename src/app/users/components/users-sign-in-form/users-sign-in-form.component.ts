import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {Subscription} from 'rxjs';

import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {USERS_SIGN_IN_USER_FORM_LAYOUT, USERS_SIGN_IN_USER_FORM_MODEL} from '@users/users.form.models';
import {UsersRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import SignIn = UsersRequests.SignIn;
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'users-sign-in-form',
    templateUrl: './users-sign-in-form.component.html',
    styleUrls: ['./users-sign-in-form.component.scss']
})
export class UsersSignInFormComponent extends FormComponent {

    @Output()
    userSignInCreated = new EventEmitter<SignIn.Response>();


    formLayout = USERS_SIGN_IN_USER_FORM_LAYOUT;

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_SIGN_IN_USER_FORM_MODEL();
    }

    createRequestData(): SignIn.Request {
        const request = new SignIn.Request();
        request.email = this.getInputModelValueAsString('email');
        request.password = this.getInputModelValueAsString('password');
        console.log('request body', request);
        return request;
    }

    sign_in_subscription$: Subscription;


    signIn = (request: SignIn.Request) => {
        this.sign_in_subscription$ = this.usersService.signIn(request)
            .pipe(CommonsService.deserializeMap(SignIn.Response)).subscribe(value => {
                console.log(value);
                this.userSignInCreated.emit(value);
            });
    }
}
