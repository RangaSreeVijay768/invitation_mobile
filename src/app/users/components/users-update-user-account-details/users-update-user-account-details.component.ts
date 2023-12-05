import {Component, EventEmitter, Injector, Output, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {UsersService} from '@users/users.service';
import {USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT, USERS_UPDATE_USER_ACCOUNT_FORM_MODEL} from '@users/users.form.models';
import {DynamicFormControlModel} from '@node-modules/@ng-dynamic-forms/core';
import {Core, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import {FormComponent} from '@core/components/form.component';
import GooglePlaceLocation = Core.GooglePlaceLocation;
import {UsersRequests} from '@users/users.models';
import UpdateUserAccountDetails = UsersRequests.UpdateUserAccountDetails;

@Component({
    selector: 'users-update-user-account-details',
    templateUrl: './users-update-user-account-details.component.html',
    styleUrls: ['./users-update-user-account-details.component.scss']
})
export class UsersUpdateUserAccountDetailsComponent extends FormComponent {
    @Input()
    userAccount: UserAccount;

    @Input()
    country: string;

    @Output()
    userAccountUpdated = new EventEmitter<boolean>();


    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    formLayout = USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT;


    initializeComponent() {
    }

    // print() {
    //     console.log('location: ' + this.getInputModelValueAsString('location'));
    // }

    afterInitializeComponent() {
        this.getInputModel('name').value =
            this.userAccount?.display_name;
        this.getInputModel('email').value =
            this.userAccount?.email_id;
        this.getInputModel('mob_num').value = this.userAccount?.phone_number;
        // displayCountry = this.userAccount.country;
        if (this.userAccount?.date_of_birth) {
            console.log('date of borth', CommonsService.getDateStringFromDatTime(this.userAccount.date_of_birth));
            // @ts-ignore
            this.getInputModel('b_day').value = {
                // @ts-ignore
                year: this.userAccount.date_of_birth.year,
                month: this.userAccount.date_of_birth.month,
                day: this.userAccount.date_of_birth.day
            };
        }
        console.log('bday', this.getInputModel('b_day').value);
        this.getInputModel('bio').value = this.userAccount?.user_bio;
        this.getInputModel('instagram').value = this.userAccount?.instagram_profile_url;
        // this.getInputModel('location').value = this.userAccount?.country;
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_UPDATE_USER_ACCOUNT_FORM_MODEL();
    }

    createRequestData(country?: string, user_account_id?: string): UpdateUserAccountDetails.Request {
        const request = new UpdateUserAccountDetails.Request();
        request.user_account_id = user_account_id || this.userAccount.user_account_id;
        request.email = this.getInputModelValueAsString('email');
        request.name = this.getInputModelValueAsString('name');
        request.city = this.getInputModelValueAsString('city');
        request.date_of_birth = CommonsService.getDateTimeFromDate(this.getDateModelValue('b_day'));
        request.user_bio = this.getInputModelValueAsString('bio');
        request.instagram_profile_url = this.getInputModelValueAsString('instagram');
        // console.log(request);

        // @ts-ignore
        const location: GooglePlaceLocation = this.getInputModel('location').value;
        if (location) {
            const location_request = request.location;
            location_request.url = location.url;
            location_request.vicinity = location.vicinity;
            location_request.latitude = location.latitude;
            location_request.longitude = location.longitude;
            location_request.place_id = location.place_id;
            location_request.google_maps_response = location.json_string;
            location_request.address = location.full_address;
            request.location = location_request;
        }

        return request;
    }


    update_user_account_details_subscription$: Subscription;

    updateUserAccountDetails(request: UpdateUserAccountDetails.Request) {
        this.update_user_account_details_subscription$ = this.usersService.updateUserAccountDetails(request)
            .subscribe(value => {
                this.userAccountUpdated.emit(value);
            });
    }
}

@Component({
    selector: 'users-update-user-account-details-no-template',
    templateUrl: './users-update-user-account-details-no-template.component.html',
    styleUrls: ['./users-update-user-account-details.component.scss']
})
export class UsersUpdateUserAccountDetailsNoTemplateComponent extends UsersUpdateUserAccountDetailsComponent {
}
