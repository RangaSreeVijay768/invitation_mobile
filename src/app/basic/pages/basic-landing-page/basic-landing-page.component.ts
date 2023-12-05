import {Component, Injector, ViewChild} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import Swiper from 'swiper';

@Component({
    selector: 'basic-landing-page',
    templateUrl: './basic-landing-page.component.html',
    styleUrls: ['./basic-landing-page.component.scss'],

})

export class BasicLandingPageComponent extends PageComponent {

    @ViewChild('swiper')
    swiperEl: any;

    swiper: Swiper;

    swiper_params = {
        slidesPerView: 3,
        pagination: {
            el: '#div-campaigns-pagination'
        }
    };

    initializeComponent() {
        // console.log(this.swiperEl);
        // const swiperEl = document.querySelector('swiper-container');
        // // console.log(swiperEl, this.swiperParams);
        // // Object.assign(swiperEl, this.swiperParams);
        // console.log(this.swiperEl, swiperEl);
        // this.swiperEl = swiperEl;
        // // @ts-ignore
        // this.swiperEl.initialize();
        // setTimeout(() => {
        //     this.swiper = this.swiperEl.nativeElement.swiper;
        //     console.log(this.swiper);
        // }, 1000);
    }

    constructor(injector: Injector) {
        super(injector);
    }

    // initializeComponent() {
    // }


}
