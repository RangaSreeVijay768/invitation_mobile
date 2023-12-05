import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'users-signup-page',
    templateUrl: './users-signup-page.component.html',
    styleUrls: ['./users-signup-page.component.scss']
})
export class UsersSignupPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
