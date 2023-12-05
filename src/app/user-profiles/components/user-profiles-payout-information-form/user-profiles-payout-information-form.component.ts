import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
  USER_PROFILES_PAYOUT_INFO_FORM_LAYOUT,
  USER_PROFILES_PAYOUT_INFO_FORM_MODEL
} from '@user-profiles/user-profiles.form.models';

@Component({
  selector: 'user-profiles-payout-information-form',
  templateUrl: './user-profiles-payout-information-form.component.html',
  styleUrls: ['./user-profiles-payout-information-form.component.scss']
})
export class UserProfilesPayoutInformationFormComponent extends FormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  formLayout = USER_PROFILES_PAYOUT_INFO_FORM_LAYOUT;


  initializeComponent() {
  }

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return USER_PROFILES_PAYOUT_INFO_FORM_MODEL();
  }
}
