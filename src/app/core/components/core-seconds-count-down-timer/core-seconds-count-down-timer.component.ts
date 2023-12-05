import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subject, timer} from '@node-modules/rxjs';
import {map, shareReplay, takeUntil} from '@node-modules/rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector: 'core-seconds-count-down-timer',
    templateUrl: './core-seconds-count-down-timer.component.html',
    styleUrls: ['./core-seconds-count-down-timer.component.scss']
})
export class CoreSecondsCountDownTimerComponent extends BaseComponent {

    @Input()
    leftTime: number;

    @Output()
    started = new EventEmitter<boolean>();
    @Output()
    stopped = new EventEmitter<boolean>();
    @Output()
    done = new EventEmitter<boolean>();
    @Output()
    paused = new EventEmitter<boolean>();

    timer_running = false;
    timer_paused = false;

    remaining_time: number;

    public timeLeft$: Observable<number>;

    onStop$ = new Subject<void>();


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {


    }

    setLeftTime(left_time: number): CoreSecondsCountDownTimerComponent {
        this.leftTime = left_time;
        return this;
    }

    start(remaining_time?: number) {
        if (!this.timer_running) {
            this.timer_running = true;
            this.remaining_time = remaining_time || this.leftTime;
            this.timeLeft$ = timer(0, 1000).pipe(
                takeUntil(this.onStop$),
                map(x => {
                    if (this.remaining_time > 0) {
                        this.remaining_time--;
                        return this.remaining_time;
                    } else {
                        this.complete();
                        return this.remaining_time;
                    }
                }),
                shareReplay(1)
            );
        }
    }

    stop() {
        this.onStop$.next();
        this.timer_running = false;
        this.remaining_time = 0;
    }

    complete() {
        this.done.emit(true);
        this.timer_running = false;
        this.onStop$.next();
    }

    pause() {
        this.onStop$.next();
        this.timer_paused = true;
        this.timer_running = false;
        this.paused.emit(true);
    }

    resume() {
        this.start(this.remaining_time);
        this.timer_paused = false;
        this.paused.emit(false);
    }

    addTime(duration_seconds: number) {
        this.pause();
        const remaining_time = this.remaining_time;
        this.remaining_time = remaining_time + duration_seconds;
        this.resume();
    }
}

@Component({
    selector: 'core-seconds-count-down-timer-no-template',
    templateUrl: './core-seconds-count-down-timer-no-template.component.html',
    styleUrls: ['./core-seconds-count-down-timer.component.scss']
})
export class CoreSecondsCountDownTimerNoTemplateComponent extends CoreSecondsCountDownTimerComponent {
}
