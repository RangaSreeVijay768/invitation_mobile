import {BaseComponent} from '@core/components/base.component';
import {Directive, EventEmitter, Input, Output, ViewChild} from '@angular/core';
// import {SwiperComponent} from '@node-modules/swiper/angular';
// import {DEFAULT_SLIDE_OPTIONS} from '@core/core.constants';
import Swiper from 'swiper';

@Directive()
export abstract class CoreSwiperSlider extends BaseComponent {

    swiper: Swiper;

    // @Input()
    // slidesPerView = 1;
    // @Input()
    // spaceBetween: number;
    //
    // @Output()
    // slidesInitialized = new EventEmitter<[swiper: Swiper]>();
    // @Output()
    // slideIndexChanged = new EventEmitter<[swiper: Swiper]>();
    //
    // totalSlides: number;
    // currentSlide = 0;

    initializeComponent() {


    }

    slideNext() {
        console.log('SLIDING NEXT');
        this.swiper.slideNext();
    }

    // slidePrevious() {
    //     console.log('SLIDING PREV');
    //     this.swiper.slidePrevious();
    // }


    // slideNext() {
    //     this.swiper_component.swiperRef.slideNext(DEFAULT_SLIDE_OPTIONS.SPEED);
    // }
    //
    // slidePrevious() {
    //     this.swiper_component.swiperRef.slidePrev(DEFAULT_SLIDE_OPTIONS.SPEED);
    // }
    //
    // slideTo(index: number) {
    //     this.swiper_component.swiperRef.slideTo(index, DEFAULT_SLIDE_OPTIONS.SPEED);
    // }
    //
    // setTotalSlides() {
    //     this.totalSlides = this.swiper_component.swiperRef.slides.length;
    // }


}
