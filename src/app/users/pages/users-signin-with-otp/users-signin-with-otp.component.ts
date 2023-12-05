import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'users-signin-with-otp',
    templateUrl: './users-signin-with-otp.component.html',
    styleUrls: ['./users-signin-with-otp.component.scss']
})
export class UsersSigninWithOtpComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
