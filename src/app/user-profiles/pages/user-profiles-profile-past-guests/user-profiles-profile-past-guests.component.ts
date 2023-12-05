import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventAttendee = Events.EventAttendee;
import {UserProfilesConstants} from '@user-profiles/user-profiles.constants';

@Component({
    selector: 'user-profiles-profile-past-guests',
    templateUrl: './user-profiles-profile-past-guests.component.html',
    styleUrls: ['./user-profiles-profile-past-guests.component.scss']
})
export class UserProfilesProfilePastGuestsComponent extends PageComponent {

    pastGuestSortFilters = ['Upcoming birthdays', 'Recently attended events', 'Attending upcoming events'];
    pastGuestSortFilter = this.pastGuestSortFilters[0];

    constructor(injector: Injector) {
        super(injector);
    }

    options = UserProfilesConstants.PROFILE_OPTIONS;

    initializeComponent() {

    }


    changePastGuestSortFilter(selected: string) {
        this.pastGuestSortFilter = selected;
    }
}
