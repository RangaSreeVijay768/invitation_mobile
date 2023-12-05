import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {UsersService} from '@users/users.service';
import {UsersRequests} from '@users/users.models';
import UpdateUserAccount = UsersRequests.UpdateUserAccount;
import {USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT, USERS_UPDATE_USER_ACCOUNT_FORM_MODEL} from '@users/users.form.models';
import {Core, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import GooglePlaceLocation = Core.GooglePlaceLocation;
import UpdateUserAccountDetails = UsersRequests.UpdateUserAccountDetails;
import LocationRequest = UsersRequests.UpdateUserAccountDetails.LocationRequest;

@Component({
    selector: 'users-update-user-account-form',
    templateUrl: './users-update-user-account-form.component.html',
    styleUrls: ['./users-update-user-account-form.component.scss']
})
export class UsersUpdateUserAccountFormComponent extends FormComponent {

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

    print() {
        console.log(
            CommonsService.getDateTimeFromDateISOString(this.getInputModel('b_day').value?.toString()),
            'yyyy-MM-dd');
        console.log('location: ', this.getInputModel('location').value);
        // console.log('location: ' + this.loc.);
    }

    afterInitializeComponent() {
        this.getInputModel('name').value =
            this.userAccount?.display_name;
        this.getInputModel('email').value =
            this.userAccount?.email_id;
        this.getInputModel('mob_num').value = this.userAccount?.phone_number;
        // displayCountry = this.userAccount.country;
        // if (this.userAccount?.date_of_birth) {
        //     console.log('date of borth', CommonsService.getDateStringFromDatTime(this.userAccount.date_of_birth));
        //     // @ts-ignore
        //     this.getInputModel('b_day').value = {
        //         // @ts-ignore
        //         year: this.userAccount.date_of_birth.year,
        //         month: this.userAccount.date_of_birth.month,
        //         day: this.userAccount.date_of_birth.day
        //     };
        // }
        // console.log('bday', this.getInputModel('b_day').value);
        this.getInputModel('bio').value = this.userAccount?.user_bio;
        this.getInputModel('instagram').value = this.userAccount?.instagram_profile_url;
        this.getInputModel('location').value = this.userAccount?.country;
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
        request.country = this.getInputModelValueAsString('country');

        request.date_of_birth = CommonsService.getDateTimeFromDateISOString(this.getInputModel('b_day').value?.toString());
        // request.country = this.getInputModel('location').value;
        request.date_of_birth = CommonsService.getDateTimeFromDate(this.getDateModelValue('b_day'));
        request.user_bio = this.getInputModelValueAsString('bio');
        request.instagram_profile_url = this.getInputModelValueAsString('instagram');
        // console.log(request);

        // @ts-ignore
        const location: GooglePlaceLocation = this.getInputModel('location').value;
        if (location) {
            const location_request = new LocationRequest();
            location_request.url = location.url;
            location_request.vicinity = location.vicinity;
            location_request.latitude = location.latitude;
            location_request.longitude = location.longitude;
            location_request.place_id = location.place_id;
            location_request.google_maps_response = location.json_string;
            location_request.address = location.full_address;
            request.location = location_request;
            request.country = location.full_address;
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
