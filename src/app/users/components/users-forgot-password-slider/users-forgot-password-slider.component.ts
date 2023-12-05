import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {
    USERS_FORGOT_PASSWORD_FORM_LAYOUT,
    USERS_FORGOT_PASSWORD_FORM_MODEL,
} from '@users/users.form.models';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import Swiper from '@node-modules/swiper';
import {Users} from '@core/core.models';

@Component({
    selector: 'users-forgot-password-slider',
    templateUrl: './users-forgot-password-slider.component.html',
    styleUrls: ['./users-forgot-password-slider.component.scss']
})
export class UsersForgotPasswordSliderComponent extends FormComponent {

    formLayout = USERS_FORGOT_PASSWORD_FORM_LAYOUT;

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_FORGOT_PASSWORD_FORM_MODEL();
    }

    @ViewChild('swiper')
    swiperRef: ElementRef | undefined;

    swiper: Swiper;

    swiperReady(event: any) {
        this.swiper = event.detail[0];
    }

    initializeComponent() {
    }

    slideNext() {
        console.log(this.swiper);
        this.swiper.slideNext();
    }

    slideTo(index: number) {
        this.swiper.slideTo(index);
    }
}
