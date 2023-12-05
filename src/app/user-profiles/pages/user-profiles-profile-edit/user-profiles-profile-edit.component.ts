import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import Event = Events.Event;
import {Events, Users} from '@core/core.models';
import {UserProfilesConstants} from "@user-profiles/user-profiles.constants";
import UserAccount = Users.UserAccount;
import {LoadingController} from '@node-modules/@ionic/angular';

// import EventInfo = Events.EventInfo;

@Component({
    selector: 'user-profiles-profile-edit',
    templateUrl: './user-profiles-profile-edit.component.html',
    styleUrls: ['./user-profiles-profile-edit.component.scss']
})
export class UserProfilesProfileEditComponent extends PageComponent {

    options = UserProfilesConstants.PROFILE_OPTIONS;

    constructor(injector: Injector,protected loadingController: LoadingController) {
        super(injector);
    }

    imageType = 'updateProfile';

    event: Event;
    event$: Observable<Event>;

    loading_in_progress: boolean;

    current_loader: HTMLIonLoadingElement;




    displayCity = 'Current city';

    Options = ['Email', 'Mobile', 'Whatsapp'];
    countryList = [
        {countryName: 'Select your country', flagSrc: '', cities: ['Select a country']},

        {countryName: 'India', flagSrc: 'assets/images/indian%20flag.png', cities: ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore']},
        {countryName: 'America', flagSrc: 'assets/images/american-flag.png', cities: ['C2']},
        {countryName: 'United Kingdom', flagSrc: 'assets/images/american-flag.png', cities: ['C3']},
    ];
    cityList = ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore'];
    displayCountry = this.countryList[0].countryName;

    protected readonly EventEmitter = EventEmitter;

    current_time_stamp = CommonsService.getCurrentTimeAsDateTime().toSeconds();


    user_account: UserAccount;
    userAccount: UserAccount;

    userAccount$: Observable<UserAccount>;

    initializeComponent() {
        this.userAccount$ = this.getRouterParameterObservable('userAccount');
        this.userAccount$.subscribe(value => {
            this.user_account = value;
        });
    }

    changeCountry(selectedItem: any) {
        this.displayCountry = selectedItem.countryName;
    }

    changeCity(selectedItem: string) {
        this.displayCity = selectedItem;
    }

    async startLoading() {
        this.loading_in_progress = true;
        await this.showLoading();
    }

    stopLoading() {
        this.loading_in_progress = false;
        if (this.current_loader) {
            this.current_loader.dismiss();
        }
    }

    async showLoading() {
        this.current_loader = await this.loadingController.create({
            message: 'uploading your favorite pic',
            spinner: 'crescent',
        });
        await this.current_loader.present();
    }

}
