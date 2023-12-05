import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {Blasts, Events} from '@core/core.models';
import Event = Events.Event;
import BlastList = Blasts.BlastList;
import {
    UserProfilesBlastsInviteToEventModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-invite-to-event-modal/user-profiles-blasts-invite-to-event-modal-content/user-profiles-blasts-invite-to-event-modal-content.component';

@Component({
    selector: 'user-profiles-blasts-invite-to-event-modal',
    templateUrl: './user-profiles-blasts-invite-to-event-modal.component.html',
    styleUrls: ['./user-profiles-blasts-invite-to-event-modal.component.scss']
})
export class UserProfilesBlastsInviteToEventModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    events: Event[];

    @Input()
    blastList: BlastList;


    openModal(params?) {
      // tslint:disable-next-line:max-line-length
        super.open(UserProfilesBlastsInviteToEventModalContentComponent, 'see-invitees-modal');
        this.setModalData('events', this.events);
        this.setModalData('blastList', this.blastList);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
