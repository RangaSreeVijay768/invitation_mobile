import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {PageComponent} from '@core/components/page.component';
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'users-signin-page',
    templateUrl: './users-signin-page.component.html',
    styleUrls: ['./users-signin-page.component.scss']
})
export class UsersSigninPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    setUserAuthTokenAndNavigate(response: UserAuthToken) {
        this.authService.setUserAuthToken(response);
        this.navigateToLoginPage();
    }

    navigateToLoginPage() {
        this.router.navigate(['/signedin']);
    }

    navigateToForgotPasswordPage() {
        this.router.navigate(['/basic/forgotpassword']);
    }
}
