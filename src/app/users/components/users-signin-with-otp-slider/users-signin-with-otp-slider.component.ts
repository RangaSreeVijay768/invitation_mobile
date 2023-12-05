import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output, Input, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {CoreSwiperSlider} from '@core/components/core-swiper-slider';
import {Users} from '@core/core.models';
import UserAuthToken = Users.UserAuthToken;


@Component({
    selector: 'users-signin-with-otp-slider',
    templateUrl: './users-signin-with-otp-slider.component.html',
    styleUrls: ['./users-signin-with-otp-slider.component.scss']
})
export class UsersSigninWithOtpSliderComponent extends CoreSwiperSlider {

    @ViewChild('swiper')
    swiperEl: any;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        console.log(this.swiperEl);
        const swiperEl = document.querySelector('swiper-container');
        // console.log(swiperEl, this.swiperParams);
        // Object.assign(swiperEl, this.swiperParams);
        console.log(this.swiperEl, swiperEl);
        this.swiperEl = swiperEl;
        // @ts-ignore
        this.swiperEl.initialize();
        setTimeout(() => {
            this.swiper = this.swiperEl.nativeElement.swiper;
        }, 1000);
    }

    setUserAuthTokenAndNavigate(response: UserAuthToken) {
        this.authService.setUserAuthToken(response);
        this.navigateToLoginPage();
    }

    navigateToLoginPage() {
        this.router.navigate(['/signedin']);
    }


}
