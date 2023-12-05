import {BaseComponent} from "@core/components/base.component";
import {AppMomentToCoreDateTimeFormatPipe} from "@core/core.pipe";
import {DEFAULT_SLIDE_OPTIONS} from "@core/core.constants";
import {CommonsService} from "@core/commons.service";
import {Directive, EventEmitter, Output, ViewChild} from "@angular/core";
import {IonSlides} from "@node-modules/@ionic/angular";

@Directive()
export abstract class CoreCreateStepWiseSliderComponent extends BaseComponent {

    app_moment_to_core_date_time_format_pipe = new AppMomentToCoreDateTimeFormatPipe();

    slide_options = {
        initialSlide: DEFAULT_SLIDE_OPTIONS.INITIAL_SLIDE,
        speed: DEFAULT_SLIDE_OPTIONS.SPEED,
        onlyExternal: false,
        allowTouchMove: false
    };

    current_date = CommonsService.getCurrentTimeAsMoment();

    totalSlides: number;
    currentSlide: number = 0;

    @ViewChild(IonSlides, {static: true})
    slides: IonSlides;

    @Output()
    trackingPlanCreated = new EventEmitter<boolean>();

    slideNext() {
        this.slides.slideNext();
    }

    slidePrevious() {
        this.slides.slidePrev();
    }

    slideTo(num: number) {
        this.slides.slideTo(num);
    }

    print(event) {
        console.log(event)
    }


    // noinspection TsLint
    ngOnInit() {
        this.slides.ionSlidesDidLoad.subscribe(async value => {
            this.totalSlides = await this.slides.length();
        });
        this.slides.ionSlideDidChange.subscribe(async value => {
            this.currentSlide = await this.slides.getActiveIndex();
        });
    }
}
