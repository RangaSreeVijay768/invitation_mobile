import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output, Input, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {CoreSwiperSlider} from '@core/components/core-swiper-slider';
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;


@Component({
    selector: 'users-user-signup-slider',
    templateUrl: './users-user-signup-slider.component.html',
    styleUrls: ['./users-user-signup-slider.component.scss']
})
export class UsersUserSignupSliderComponent extends CoreSwiperSlider {

    constructor(injector: Injector) {
        super(injector);
    }

    @ViewChild('swiper')
    swiperEl: any;

    message_delivery:MessageDelivery;

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

    navigateTo() {
        this.router.navigateByUrl(`/signedin/events/homepage`);
    }

    swiperReady(event: any) {
        this.swiper = event.detail[0];
    }

    slideNext() {
        console.log(this.swiper);
        this.swiper.slideNext();
    }

}
