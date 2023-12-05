import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'user-profiles-invite-to-event-slider',
    templateUrl: './user-profiles-invite-to-event-slider.component.html',
    styleUrls: ['./user-profiles-invite-to-event-slider.component.scss']
})
export class UserProfilesInviteToEventSliderComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
