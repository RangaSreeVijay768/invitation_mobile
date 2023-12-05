import {Component, Injector} from "@angular/core";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;

@Component({
    selector: 'user-profiles-blasts-add-upload-contact-modal-content',
    templateUrl: './user-profiles-blasts-add-upload-contact-modal-content.component.html',
    styleUrls: ['./user-profiles-blasts-add-upload-contact-modal-content.component.scss']
})
export class UserProfilesBlastsAddUploadContactModalContentComponent extends BaseModalContentComponent {

    blast_list: BlastList;

    constructor( injector: Injector) {
        super( injector);
    }

    initializeComponent() {
        console.log(this.blast_list);
    }


}

