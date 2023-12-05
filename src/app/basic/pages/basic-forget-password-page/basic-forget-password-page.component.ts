import {Component, Injector} from '@angular/core';

import {PageComponent} from "@core/components/page.component";
import {USERS_SIGN_IN_USER_FORM_LAYOUT} from '@users/users.form.models';

@Component({
    selector: 'basic-forget-password-page',
    templateUrl: './basic-forget-password-page.component.html',
    styleUrls: ['./basic-forget-password-page.component.scss']
})
export class BasicForgetPasswordPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    protected readonly USERS_SIGN_IN_USER_FORM_LAYOUT = USERS_SIGN_IN_USER_FORM_LAYOUT;
}
