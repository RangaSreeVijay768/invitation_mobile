import {AfterViewInit, Directive, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {DEFAULT_SLIDE_OPTIONS} from '@core/core.constants';
import {IonSlides} from '@node-modules/@ionic/angular';
import {BaseComponent} from '@core/components/base.component';

@Directive()
export abstract class CoreSliderComponent<T extends BaseComponent> extends SortedPaginatedBaseComponent
    implements AfterViewInit {

    @Input()
    slidesPerView: number;
    @Input()
    spaceBetween: number;

    @Input()
    slideOptions: any;

    @ViewChildren('component')
    components: QueryList<T>;
    @ViewChild(IonSlides, {static: true})
    slides: IonSlides;

    api_component: T;


    initializeComponent() {
        const slide_options = {
            initialSlide: DEFAULT_SLIDE_OPTIONS.INITIAL_SLIDE,
            speed: DEFAULT_SLIDE_OPTIONS.SPEED,
            onlyExternal: false,
            allowTouchMove: true,
            slidesPerView: this.slidesPerView || 1,
            spaceBetween: this.spaceBetween || 0,
        };
        this.slideOptions = this.slideOptions || slide_options;
    }


    ngAfterViewInit(): void {
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.api_component = comps.first;
        });
    }

    refreshSlider() {
    }

}

@Directive()
export abstract class CoreSwiperSliderComponent<T extends BaseComponent> extends SortedPaginatedBaseComponent
    implements AfterViewInit {

    @Input()
    slidesPerView: number;
    @Input()
    spaceBetween: number;

    @ViewChildren('component')
    components: QueryList<T>;
    // @ViewChild(SwiperComponent, {static: true})
    // swiper_component: SwiperComponent;

    @Output()
    apiComponentInitialized = new EventEmitter<T>;

    api_component: T;


    initializeComponent() {
    }


    ngAfterViewInit(): void {
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.api_component = comps.first;
            this.apiComponentInitialized.emit(this.api_component);
        });
    }

    refreshSlider() {
    }

}
