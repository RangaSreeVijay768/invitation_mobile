import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {BalstsBlastsFilterModalContentComponent} from './balsts-blasts-filter-modal-content/balsts-blasts-filter-modal-content.component';
import {
    UserProfilesBlastsFilterModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-filter-modal/user-profiles-blasts-filter-modal-content/user-profiles-blasts-filter-modal-content.component';

@Component({
    selector: 'blasts-blasts-filter-modal',
    templateUrl: './blasts-blasts-filter-modal.component.html',
    styleUrls: ['./blasts-blasts-filter-modal.component.scss']
})
export class BlastsBlastsFilterModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    filter_type: string;


    openModal(filter_type?: string, params?) {
        super.open(BalstsBlastsFilterModalContentComponent, "contacts-filter-modal");
        this.setModalData('filter_type',filter_type );
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
