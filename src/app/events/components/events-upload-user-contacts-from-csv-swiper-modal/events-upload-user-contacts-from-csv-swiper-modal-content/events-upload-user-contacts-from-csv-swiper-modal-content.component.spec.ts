import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadUserContactsFromCsvSwiperModalContentComponent } from './events-upload-user-contacts-from-csv-swiper-modal-content.component';

describe('EventsUploadUserContactsFromCsvSwiperModalContentComponent', () => {
  let component: EventsUploadUserContactsFromCsvSwiperModalContentComponent;
  let fixture: ComponentFixture<EventsUploadUserContactsFromCsvSwiperModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadUserContactsFromCsvSwiperModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsUploadUserContactsFromCsvSwiperModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
