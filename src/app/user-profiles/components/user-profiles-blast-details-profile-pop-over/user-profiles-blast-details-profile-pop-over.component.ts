import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BasePopoverComponent} from "@core/components/popover/base-popover.component";
import {
    UserProfilesBlastDetailsProfilePopOverContentComponent
} from '@user-profiles/components/user-profiles-blast-details-profile-pop-over/user-profiles-blast-details-profile-pop-over-content/user-profiles-blast-details-profile-pop-over-content.component';
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;

@Component({
    selector: 'user-profiles-blast-details-profile-pop-over',
    templateUrl: './user-profiles-blast-details-profile-pop-over.component.html',
    styleUrls: ['./user-profiles-blast-details-profile-pop-over.component.scss']
})
export class UserProfilesBlastDetailsProfilePopOverComponent extends BasePopoverComponent {


    @Input()
    blastList: BlastList;

    constructor(injector: Injector) {
        super(injector);
    }

    async presentPopover(event:Event): Promise<void> {
       this.setPopoverData("blast_list",this.blastList);
       await super.presentPopover(UserProfilesBlastDetailsProfilePopOverContentComponent,'profile-popover',event);
    }

    initializeComponent() {
    }



}
