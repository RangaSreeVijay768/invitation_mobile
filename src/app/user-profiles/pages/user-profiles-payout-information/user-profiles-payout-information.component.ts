import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {
    USER_PROFILES_PAYOUT_INFO_FORM_LAYOUT,
    USER_PROFILES_PAYOUT_INFO_FORM_MODEL
} from "@user-profiles/user-profiles.form.models";
import {UserProfilesConstants} from '@user-profiles/user-profiles.constants';

@Component({
    selector: 'user-profiles-payout-information',
    templateUrl: './user-profiles-payout-information.component.html',
    styleUrls: ['./user-profiles-payout-information.component.scss']
})
export class UserProfilesPayoutInformationComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    segment:string;

    options = UserProfilesConstants.PROFILE_OPTIONS;


    initializeComponent() {
        this.segment='Payout information';

    }


}
