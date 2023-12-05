import {Component, Injector} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';

@Component({
    selector: 'user-profiles-user-upcoming-events-modal-content',
    templateUrl: './user-profiles-user-upcoming-events-modal-content.component.html',
    styleUrls: ['./user-profiles-user-upcoming-events-modal-content.component.scss']
})
export class UserProfilesUserUpcomingEventsModalContentComponent extends BaseModalContentComponent {

    constructor(injector: Injector) {
        super( injector);
    }

    initializeComponent() {
    }

}

