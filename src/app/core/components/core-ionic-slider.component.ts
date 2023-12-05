import {Directive, EventEmitter, Injector, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {IonSlides} from '@ionic/angular';
import {CommonsService} from '@core/commons.service';
import {flatMap, skipWhile, throttle} from 'rxjs/operators';
import {interval} from 'rxjs';
import unionBy from 'lodash/unionBy';

@Directive()
export abstract class CoreIonicSliderComponent<T> extends BaseComponent {

    items: T[] = [];

    @ViewChild(IonSlides, {static: true})
    slides: IonSlides;

    @Output()
    nextFinished = new EventEmitter<T>();
    @Output()
    previousFinished = new EventEmitter<T>();

    constructor(injector: Injector) {
        super(injector);

        this.nextFinished.pipe(throttle(val => interval(2000))).subscribe(value => {
            const index = this.findIndex(this.items, value);
            this.slideByHandlingAutoplay(this.slides, index);
        });

        this.previousFinished.pipe(throttle(val => interval(2000))).subscribe(value => {
            const index = this.findIndex(this.items, value);
            this.slideByHandlingAutoplay(this.slides, index);
        });
    }

    slideByHandlingAutoplay(slides: IonSlides, index: number) {
        const THIS = this;
        slides.stopAutoplay().then(success => {
            slides.slideTo(index).then(success2 => {
                const swiper = THIS.getSwiper(slides);
                if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
                    slides.startAutoplay();
                }
            });
        });
    }

    // noinspection TsLint
    ngOnInit() {
        this.slides.ionSlideReachEnd.subscribe(value => {
            this.next();
        });
        this.slides.ionSlideReachStart.subscribe(value => {
            this.previous();
        });
        super.ngOnInit();
    }

    abstract getNextItems();

    abstract getPreviousItems();

    abstract getItemEquality(item_1: T, item_2: T);

    abstract findIndex(array: T[], item: T): number;


    next() {
        this.slides.lockSwipes(true).then(success => {
            this.getNextItems();
        });
    }

    previous() {
        this.slides.lockSwipes(true).then(success => {
            this.getPreviousItems();
        });
    }

    empty_first = 0;
    empty_previous = 0;

    MAX_TRIES = 2;

    addNextItems(items: T[]) {
        if (this.empty_first < this.MAX_TRIES) {
            if (items && items.length) {
                this.empty_first = 0;
                this.slides.getActiveIndex().then(current_index => {

                    const current_item = this.items[current_index];
                    // @ts-ignore
                    this.items = unionBy(this.items, items, this.getItemEquality);
                    const subscription = interval(50)
                        .pipe(flatMap(value => CommonsService.promiseToObservable(this.slides.update())),
                            flatMap(value => CommonsService.promiseToObservable(this.slides.length())),
                            skipWhile(value => {
                                return value !== this.items.length;
                            })).subscribe(response => {
                            this.slides.lockSwipes(false).then(success => {
                                subscription.unsubscribe();
                                this.nextFinished.emit(current_item);
                            }).catch(error => {

                            });
                        });
                });
            } else {
                this.empty_first++;
                const THIS = this;
                this.slides.lockSwipes(false).then(success => {
                    if (!THIS.items.length) {
                        THIS.previous();
                    }
                });
            }
        }
    }

    addPreviousItems(items: T[]) {
        if (this.empty_previous < this.MAX_TRIES) {
            if (items && items.length) {
                this.empty_previous = 0;
                this.slides.getActiveIndex().then(current_index => {
                    const current_item = this.items[current_index];
                    // @ts-ignore
                    this.items = unionBy(items.reverse(), this.items, this.getItemEquality);
                    const subscription = interval(50)
                        .pipe(flatMap(value => CommonsService.promiseToObservable(this.slides.update())),
                            flatMap(value => CommonsService.promiseToObservable(this.slides.length())),
                            skipWhile(value => {
                                return value !== this.items.length;
                            })).subscribe(response => {
                            this.slides.lockSwipes(false).then(success => {
                                subscription.unsubscribe();
                                this.previousFinished.emit(current_item);
                            });
                        });

                });
            } else {
                this.empty_previous++;
                const THIS = this;
                this.slides.lockSwipes(false).then(success => {
                    if (!THIS.items.length) {
                        THIS.next();
                    }
                });
            }
        }

    }

    getSwiper(slides: IonSlides) {
        // @ts-ignore
        return this.slides.el.swiper;
    }
}
