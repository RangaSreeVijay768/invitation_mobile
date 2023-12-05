import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    EventsUploadUserContactsFromCsvSwiperModalComponent
} from '@events/components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal.component';
import {
    EventsUploadUserContactsFromCsvSwiperModalContentComponent
} from '@events/components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal-content/events-upload-user-contacts-from-csv-swiper-modal-content.component';

@Component({
    selector: 'user-profiles-user-contacts-from-csv-swiper-modal',
    templateUrl: './user-profiles-user-contacts-from-csv-swiper-modal.component.html',
    styleUrls: ['./user-profiles-user-contacts-from-csv-swiper-modal.component.scss']
})
export class UserProfilesUserContactsFromCsvSwiperModalComponent extends EventsUploadUserContactsFromCsvSwiperModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(EventsUploadUserContactsFromCsvSwiperModalContentComponent, {
            windowClass: 'events-upload-user-contacts-from-csv-swiper-modal',
            scrollable: true
        });
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}


