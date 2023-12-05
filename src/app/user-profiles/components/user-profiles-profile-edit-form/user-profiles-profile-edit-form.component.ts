import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {
  USER_PROFILES_PAYOUT_INFO_FORM_LAYOUT, USER_PROFILES_PROFILE_EDIT_FORM_LAYOUT,
  USER_PROFILES_PROFILE_EDIT_FORM_MODEL
} from "@user-profiles/user-profiles.form.models";

@Component({
    selector: 'user-profiles-profile-edit-form',
    templateUrl: './user-profiles-profile-edit-form.component.html',
    styleUrls: ['./user-profiles-profile-edit-form.component.scss']
})
export class UserProfilesProfileEditFormComponent extends FormComponent {
  countryCodeList = [
    {
      flagSrc: 'assets/images/american-flag.png',
      countryCode: '+1',
    },
    {
      flagSrc: 'assets/images/indian%20flag.png',
      countryCode: '+91',
    },
    {
      flagSrc: 'assets/images/american-flag.png',
      countryCode: '+44',
    },
  ];
  currentCountryCode = this.countryCodeList[0].flagSrc;
  currentCountryCodeFlag = this.countryCodeList[0].countryCode;
  changeCountryCode(selected: any) {
    console.log(selected);
    this.currentCountryCode = selected.countryCode;
    this.currentCountryCodeFlag = selected.flagSrc;
  }
    constructor(injector: Injector) {
        super(injector);
    }

  formLayout = USER_PROFILES_PROFILE_EDIT_FORM_LAYOUT;

  initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USER_PROFILES_PROFILE_EDIT_FORM_MODEL();
    }
}
