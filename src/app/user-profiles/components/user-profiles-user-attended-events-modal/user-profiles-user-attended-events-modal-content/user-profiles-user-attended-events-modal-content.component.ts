import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";

@Component({
    selector: 'user-profiles-user-attended-events-modal-content',
    templateUrl: './user-profiles-user-attended-events-modal-content.component.html',
    styleUrls: ['./user-profiles-user-attended-events-modal-content.component.scss']
})
export class UserProfilesUserAttendedEventsModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}

