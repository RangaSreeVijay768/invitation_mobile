import {Component, Injector} from "@angular/core";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";

@Component({
    selector: 'user-profiles-blasts-filter-modal-content',
    templateUrl: './user-profiles-blasts-filter-modal-content.component.html',
    styleUrls: ['./user-profiles-blasts-filter-modal-content.component.scss']
})
export class UserProfilesBlastsFilterModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector) {
        super( injector);
    }

    filter_type: string;

    filters = [
        {
            label: 'ALL',
            value: undefined,
            icon: 'globe'
        },
        {
            label: 'EMAIL',
            value: 'EMAIL',
            icon: 'mail'
        },
        {
            label: 'WHATSAPP',
            value: 'WHATS_APP',
            image: 'assets/images/whatsapp-logo-purple.png'
        },
        {
            label: 'Text',
            value: 'SMS',
            icon: 'file-text'
        }
    ]

    initializeComponent() {
    }


}

