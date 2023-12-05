import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'user-profiles-user-profile-page',
    templateUrl: './user-profiles-user-profile-page.component.html',
    styleUrls: ['./user-profiles-user-profile-page.component.scss']
})
export class UserProfilesUserProfilePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
