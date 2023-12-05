import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    UserProfilesBlastsFilterModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-filter-modal/user-profiles-blasts-filter-modal-content/user-profiles-blasts-filter-modal-content.component';

@Component({
    selector: 'user-profiles-blasts-filter-modal',
    templateUrl: './user-profiles-blasts-filter-modal.component.html',
    styleUrls: ['./user-profiles-blasts-filter-modal.component.scss']
})
export class UserProfilesBlastsFilterModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    filter_type: string;


    openModal(filter_type?: string, params?) {
        super.open(UserProfilesBlastsFilterModalContentComponent, {windowClass: 'user-profiles-blasts-filter-modal', scrollable:true, fullscreen:'lg'});
        this.setModalData('filter_type',filter_type );
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
