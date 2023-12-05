import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
  USER_PROFILES_CREATE_USER_CONTACT_FORM_MODEL, USER_PROFILES_CREATE_USER_CONTACT_LAYOUT
} from '@user-profiles/user-profiles.form.models';
import {UsersRequests} from '@users/users.models';
import CreateUserFollow = UsersRequests.CreateUserFollow;
import CreateUserContact = UsersRequests.CreateUserContact;
import {UsersService} from '@users/users.service';

@Component({
  selector: 'user-profiles-creat-user-contact-form',
  templateUrl: './user-profiles-creat-user-contact-form.component.html',
  styleUrls: ['./user-profiles-creat-user-contact-form.component.scss']
})
export class UserProfilesCreatUserContactFormComponent extends FormComponent {

  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  @Output()
  userContactCreated = new EventEmitter<string>();

  formLayout = USER_PROFILES_CREATE_USER_CONTACT_LAYOUT;

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return USER_PROFILES_CREATE_USER_CONTACT_FORM_MODEL();
  }

  createRequestData(): CreateUserContact.Request {
    const request = new CreateUserContact.Request();
    request.contact_type = this.getInputModelValueAsString('contact_type');
    request.display_name = this.getInputModelValueAsString('display_name');
    request.email_id = this.getInputModelValueAsString('email_id');
    request.phone_number = this.getInputModelValueAsString('phone_number');
    request.whatsapp_number = this.getInputModelValueAsString('whatsapp_number');
    request.target_account_id = this.loggedAccount.user_account_id;
    return request;
  }

  create_user_contact_subscription$: Subscription;

  createUserContact = (request: CreateUserContact.Request) => {
    this.create_user_contact_subscription$ = this.usersService.createUserContact(request)
      .subscribe(value => {
        this.userContactCreated.emit(value);
      });
  };
}
