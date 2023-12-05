import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadUserContactsFromCsvSwiperModalComponent } from './events-upload-user-contacts-from-csv-swiper-modal.component';

describe('EventsUploadUserContactsFromCsvSwiperModalComponent', () => {
  let component: EventsUploadUserContactsFromCsvSwiperModalComponent;
  let fixture: ComponentFixture<EventsUploadUserContactsFromCsvSwiperModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadUserContactsFromCsvSwiperModalComponent]
    });
    fixture = TestBed.createComponent(EventsUploadUserContactsFromCsvSwiperModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
