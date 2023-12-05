import {Component, Injector} from '@angular/core';

import {PageComponent} from "@core/components/page.component";
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'basic-sign-up-page',
    templateUrl: './basic-sign-up-page.component.html',
    styleUrls: ['./basic-sign-up-page.component.scss']
})
export class BasicSignUpPageComponent extends PageComponent {

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

}
