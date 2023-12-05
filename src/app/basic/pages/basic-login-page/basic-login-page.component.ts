import {Component, Injector} from '@angular/core';

import {PageComponent} from '@core/components/page.component';
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'basic-login-page',
    templateUrl: './basic-login-page.component.html',
    styleUrls: ['./basic-login-page.component.scss']
})
export class BasicLoginPageComponent extends PageComponent {

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
        this.router.navigate(['/signedin/events/homepage']);
    }

}
