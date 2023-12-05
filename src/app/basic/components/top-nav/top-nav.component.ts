import {Component, Injector} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {environment} from "@environment/environment";

@Component({
    selector: 'basic-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent extends BaseComponent {

    ENVIRONMENT = environment;

    constructor(injector: Injector) {
        super(injector);
    }


    initializeComponent() {
    }

    navigateToSignIn() {
        this.router.navigate(['/basic/signin']);
    }

    navigateToSignUp() {
        this.router.navigate(['/basic/signup']);
    }

}

@Component({
    selector: 'basic-top-nav-login',
    templateUrl: './top-nav-login.component.html',
    styleUrls: ['./top-nav.component.scss']
})
export class TopNavLoginComponent extends TopNavComponent {
}
