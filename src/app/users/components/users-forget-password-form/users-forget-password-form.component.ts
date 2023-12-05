import {Component, Injector} from '@angular/core';

import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {USERS_FORGET_PASSWORD_FORM_LAYOUT, USERS_FORGET_PASSWORD_FORM_MODEL} from '@users/users.form.models';

@Component({
    selector: 'users-forget-password-form',
    templateUrl: './users-forget-password-form.component.html',
    styleUrls: ['./users-forget-password-form.component.scss']
})
export class UsersForgetPasswordFormComponent extends FormComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    formLayout = USERS_FORGET_PASSWORD_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_FORGET_PASSWORD_FORM_MODEL();
    }
}
