import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import Swiper from 'swiper';
import {Events, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;

@Component({
    selector: 'events-invite-past-attendees-in-share-event-swiper',
    templateUrl: './events-invite-past-attendees-in-share-event-swiper.component.html',
    styleUrls: ['./events-invite-past-attendees-in-share-event-swiper.component.scss']
})
export class EventsInvitePastAttendeesInShareEventSwiperComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    user_accounts_list: UserAccount[] = [];

    @Output()
    closeModalReceived = new EventEmitter<boolean>;

    @ViewChild('swiper')
    swiperEl: any;

    swiper: Swiper;

    printU() {
        console.log('ual ', this.user_accounts_list);
    }

    swiperReady(event: any) {
        this.swiper = event.detail[0];
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

    slideNext() {
        this.swiper.slideNext();
    }
}
