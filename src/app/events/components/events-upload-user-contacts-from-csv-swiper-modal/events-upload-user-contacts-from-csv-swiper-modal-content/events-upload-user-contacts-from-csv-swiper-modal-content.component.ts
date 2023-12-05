import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
// import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'events-upload-user-contacts-from-csv-swiper-modal-content',
    templateUrl: './events-upload-user-contacts-from-csv-swiper-modal-content.component.html',
    styleUrls: ['./events-upload-user-contacts-from-csv-swiper-modal-content.component.scss']
})
export class EventsUploadUserContactsFromCsvSwiperModalContentComponent extends BaseModalContentComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}

