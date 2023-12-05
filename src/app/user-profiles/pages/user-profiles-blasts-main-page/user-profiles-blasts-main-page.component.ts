import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import {UserProfilesConstants} from "@user-profiles/user-profiles.constants";

@Component({
    selector: 'user-profiles-blasts-main-page',
    templateUrl: './user-profiles-blasts-main-page.component.html',
    styleUrls: ['./user-profiles-blasts-main-page.component.scss']
})
export class UserProfilesBlastsMainPageComponent extends PageComponent {

    options = UserProfilesConstants.PROFILE_OPTIONS;

    constructor(injector: Injector) {
        super(injector);
    }

    type: string;
    segment:string;

    userAccount: UserAccount;

    filter_blast_list_name:string;

    initializeComponent() {
        this.segment='Mass messaging';
        // this.type =;
    }


}
