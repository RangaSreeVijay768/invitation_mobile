import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {EventsSearchEventInfosComponent} from '@events/components/events-search-event-infos/events-search-event-infos.component';
import {UserProfilesConstants} from '@user-profiles/user-profiles.constants';

@Component({
    selector: 'user-profiles-profile-all-contacts',
    templateUrl: './user-profiles-profile-all-contacts.component.html',
    styleUrls: ['./user-profiles-profile-all-contacts.component.scss']
})
export class UserProfilesProfileAllContactsComponent extends PageComponent {

    // pastGuestSortFilters = ['Upcoming birthdays', 'Recently attended events', 'Attending upcoming events'];
    // pastGuestSortFilter = this.pastGuestSortFilters[0];

    constructor(injector: Injector) {
        super(injector);
    }
    options = UserProfilesConstants.PROFILE_OPTIONS;

    initializeComponent() {
    }
    // changePastGuestSortFilter(selected: string) {
    //     this.pastGuestSortFilter = selected;
    // }
}

@Component({
    selector: 'user-profiles-profile-all-contacts-scrolling',
    templateUrl: './user-profiles-profile-all-contacts-scrolling.html',
    styleUrls: ['./user-profiles-profile-all-contacts.component.scss']
})

export class UserProfilesProfileAllContactsScrollingComponent extends BaseInfiniteScrollComponent<EventsSearchEventInfosComponent> {
    initializeComponent() {
    }
    performScrolling() {
        // this.scrollingComponent.searchEventInfos(
        //     this.scrollingComponent.createRequestData(undefined, undefined, undefined, this.currentCount,
        //         this.numberOfItems));
    }
}

