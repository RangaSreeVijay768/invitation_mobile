import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {UserProfilesConstants} from "@user-profiles/user-profiles.constants";

@Component({
    selector: 'user-profiles-main-page',
    templateUrl: './user-profiles-main-page.component.html',
    styleUrls: ['./user-profiles-main-page.component.scss']
})
export class UserProfilesMainPageComponent extends PageComponent {

    selected_option = 'Edit profile';

    segment:string;

    options = UserProfilesConstants.PROFILE_OPTIONS;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.segment='Edit profile';
    }


}
