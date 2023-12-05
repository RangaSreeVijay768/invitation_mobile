import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {BasePopoverContentComponent} from "@core/components/popover/base-popover-content.component";
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;
@Component({
    selector: 'user-profiles-blast-details-profile-pop-over-content',
    templateUrl: './user-profiles-blast-details-profile-pop-over-content.component.html',
    styleUrls: ['./user-profiles-blast-details-profile-pop-over-content.component.scss']
})
export class UserProfilesBlastDetailsProfilePopOverContentComponent extends BasePopoverContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    blast_list: BlastList;

    initializeComponent() {
        console.log(this.blast_list)
    }

}

