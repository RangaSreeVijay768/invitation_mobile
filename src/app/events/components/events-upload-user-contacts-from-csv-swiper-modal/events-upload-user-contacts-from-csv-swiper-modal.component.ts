import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
  EventsUploadUserContactsFromCsvSwiperModalContentComponent
} from '@events/components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal-content/events-upload-user-contacts-from-csv-swiper-modal-content.component';

@Component({
  selector: 'events-upload-user-contacts-from-csv-swiper-modal',
  templateUrl: './events-upload-user-contacts-from-csv-swiper-modal.component.html',
  styleUrls: ['./events-upload-user-contacts-from-csv-swiper-modal.component.scss']
})
export class EventsUploadUserContactsFromCsvSwiperModalComponent extends BaseModalComponent {


  constructor(injector: Injector) {
    super(injector);
  }


  openModal(params?) {
    super.open(EventsUploadUserContactsFromCsvSwiperModalContentComponent,
      {
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

@Component({
  selector: 'events-upload-user-contacts-from-csv-swiper-modal-no-template',
  templateUrl: './events-upload-user-contacts-from-csv-swiper-modal-no-template.component.html',
  styleUrls: ['./events-upload-user-contacts-from-csv-swiper-modal.component.scss']
})
export class EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent
    extends EventsUploadUserContactsFromCsvSwiperModalComponent {
}
